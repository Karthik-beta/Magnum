from django.core.management.base import BaseCommand
from skf.models import BreakdownHMI, AndonData
from django.db import transaction
from datetime import datetime, timedelta





# Function to calculate breakdown time
def calculate_breakdown_time(start_time_str, end_time_str):
    start_time = datetime.strptime(start_time_str, '%Y-%m-%d %H:%M:%S')
    end_time = datetime.strptime(end_time_str, '%Y-%m-%d %H:%M:%S')
    duration = end_time - start_time
    return str(duration)[:19]



class Command(BaseCommand):
    help = 'Process alert values in breakdown_hmi table and update andon_data table'

    def handle(self, *args, **options):
        with transaction.atomic():
            processed_entries = set()  # To keep track of processed entries

            # Get all BreakdownHMI entries sorted by timestamp
            breakdown_hmi_entries = BreakdownHMI.objects.order_by('timestamp')

            for entry in breakdown_hmi_entries:
                if entry.alert_value == 1:
                    if entry.machine_id + entry.breakdown_alert + entry.channel_id not in processed_entries:
                        # Create a new AndonData entry for alert_value = 1
                        andon_entry = AndonData.objects.update_or_create(
                            machineId=entry.machine_id,
                            category=entry.breakdown_alert,
                            assemblyline=entry.channel_id,
                            defaults={
                                'andon_alerts': str(entry.timestamp)[:19],
                            }
                            # andon_alerts=str(entry.timestamp)[:19]
                        )

                        # Unpack the tuple to get the actual object
                        andon_entry = andon_entry[0]

                        # Calculate and set the alert_shift
                        andon_alert_time = datetime.strptime(andon_entry.andon_alerts, '%Y-%m-%d %H:%M:%S')
                        if 6 <= andon_alert_time.hour < 14:
                            andon_entry.alert_shift = "FS"
                        elif 14 <= andon_alert_time.hour < 22:
                            andon_entry.alert_shift = "SS"
                        elif 22 <= andon_alert_time.hour < 6:
                            andon_entry.alert_shift = "NS"
                        
                        andon_entry.save()


                        processed_entries.add(entry.machine_id + entry.breakdown_alert + entry.channel_id)

                elif entry.alert_value == 2:
                    if entry.machine_id + entry.breakdown_alert + entry.channel_id in processed_entries:
                        # Find the corresponding AndonData entry and update andon_acknowledge
                        andon_entry = AndonData.objects.get(
                            machineId=entry.machine_id,
                            category=entry.breakdown_alert,
                            assemblyline=entry.channel_id
                        )
                        if andon_entry.andon_acknowledge is None or str(entry.timestamp) > andon_entry.andon_acknowledge:
                            andon_entry.andon_acknowledge = str(entry.timestamp)[:19]
                            andon_entry.save()

                elif entry.alert_value == 0:
                    if entry.machine_id + entry.breakdown_alert + entry.channel_id in processed_entries:
                        # Find the corresponding AndonData entry and update andon_resolved
                        andon_entry = AndonData.objects.get(
                            machineId=entry.machine_id,
                            category=entry.breakdown_alert,
                            assemblyline=entry.channel_id
                        )
                        if andon_entry.andon_resolved is None or str(entry.timestamp) > andon_entry.andon_resolved:
                            andon_entry.andon_resolved = str(entry.timestamp)[:19]
                            andon_entry.save()
                            # Calculate and store the total breakdown time
                            andon_entry.total_time = calculate_breakdown_time(andon_entry.andon_alerts, andon_entry.andon_resolved)
                            andon_entry.save()

        self.stdout.write(self.style.SUCCESS('Successfully processed alert values and updated andon_data table.'))


        

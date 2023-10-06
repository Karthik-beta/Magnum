from django.core.management.base import BaseCommand
from skf.models import BreakdownHMI, AndonData
from django.db import transaction
from datetime import datetime, timedelta
from django.db import connection

# Function to calculate breakdown time
def calculate_breakdown_time(start_time_str, end_time_str):
    start_time = datetime.strptime(start_time_str, '%Y-%m-%d %H:%M:%S')
    end_time = datetime.strptime(end_time_str, '%Y-%m-%d %H:%M:%S')
    duration = end_time - start_time
    return str(duration)[:19]

# Function to calculate response time
def calculate_response_time(alert_time_str, acknowledge_time_str):
    if alert_time_str and acknowledge_time_str:
        alert_time = datetime.strptime(alert_time_str, '%Y-%m-%d %H:%M:%S')
        acknowledge_time = datetime.strptime(acknowledge_time_str, '%Y-%m-%d %H:%M:%S')
        response_duration = acknowledge_time - alert_time
        return str(response_duration)[:19]
    return None

# Function to calculate repair time
def calculate_repair_time(resolved_time_str, acknowledge_time_str):
    if resolved_time_str and acknowledge_time_str:
        resolved_time = datetime.strptime(resolved_time_str, '%Y-%m-%d %H:%M:%S')
        acknowledge_time = datetime.strptime(acknowledge_time_str, '%Y-%m-%d %H:%M:%S')
        repair_duration = resolved_time - acknowledge_time
        return str(repair_duration)[:19]
    return None


# def delete_duplicate_breakdownhmi_records():
#     with connection.cursor() as cursor:
#         cursor.execute("""
#             WITH Duplicates AS (
#             SELECT machine_id, channel_id, breakdown_alert, alert_value, "timestamp",
#                 ROW_NUMBER() OVER (PARTITION BY machine_id, channel_id, breakdown_alert, alert_value ORDER BY "timestamp") AS row_num
#             FROM public.breakdown_hmi
#         )
#         DELETE FROM public.breakdown_hmi
#         WHERE (machine_id, channel_id, breakdown_alert, alert_value, "timestamp") 
#             IN (
#                 SELECT machine_id, channel_id, breakdown_alert, alert_value, "timestamp"
#                 FROM Duplicates
#                 WHERE row_num > 1
#             );
#         """)



class Command(BaseCommand):
    help = 'Process alert values in breakdown_hmi table and update or create andon_data table entries for the last 30 days'

    def handle(self, *args, **options):
        # delete_duplicate_breakdownhmi_records()  # Call the function to delete duplicate records


        with transaction.atomic():
            processed_entries = set()  # To keep track of processed entries

            # Calculate the date 30 days ago
            thirty_days_ago = datetime.now() - timedelta(days=30)

            # Get BreakdownHMI entries for the last 30 days and newer ones, sorted by timestamp
            breakdown_hmi_entries = BreakdownHMI.objects.filter(timestamp__gte=thirty_days_ago).order_by('timestamp')

            for entry in breakdown_hmi_entries:
                if entry.alert_value == 1:
                    if entry.machine_id + entry.breakdown_alert + entry.channel_id not in processed_entries:
                        # Create or update an AndonData entry for alert_value = 1 within the last 30 days
                        andon_entry, created = AndonData.objects.get_or_create(
                            machineId=entry.machine_id,
                            category=entry.breakdown_alert,
                            assemblyline=entry.channel_id,
                            defaults={
                                'andon_alerts': str(entry.timestamp)[:19],
                            }
                        )

                        # Calculate and set the alert_shift
                        if created:
                            andon_alert_time = datetime.strptime(andon_entry.andon_alerts, '%Y-%m-%d %H:%M:%S')
                            if 7 <= andon_alert_time.hour < 15:
                                andon_entry.alert_shift = "FS"
                            elif 15 <= andon_alert_time.hour < 23:
                                andon_entry.alert_shift = "SS"
                            elif 23 <= andon_alert_time.hour < 7:
                                andon_entry.alert_shift = "NS"
                        
                            andon_entry.save()

                        # Calculate and set response_time 
                        if andon_entry.andon_alerts and andon_entry.andon_acknowledge:
                            andon_entry.response_time = calculate_response_time(andon_entry.andon_alerts, andon_entry.andon_acknowledge)
                            

                        # Calculate and set repair_time
                        if andon_entry.andon_acknowledge and andon_entry.andon_resolved:
                            andon_entry.repair_time = calculate_repair_time(andon_entry.andon_resolved, andon_entry.andon_acknowledge)
                            
                        # Save the andon_entry after both conditions have been evaluated
                        andon_entry.save()


                        processed_entries.add(entry.machine_id + entry.breakdown_alert + entry.channel_id)

                elif entry.alert_value == 2:
                    if entry.machine_id + entry.breakdown_alert + entry.channel_id in processed_entries:
                        # Find the corresponding AndonData entry
                        andon_entries = AndonData.objects.filter(
                            machineId=entry.machine_id,
                            category=entry.breakdown_alert,
                            assemblyline=entry.channel_id
                        ).order_by('andon_alerts')  # Order by timestamp in ascending order

                        if andon_entries:
                            andon_entry = andon_entries.first()  # Get the earliest occurrence
                            if andon_entry.andon_acknowledge is None or str(entry.timestamp) < andon_entry.andon_acknowledge:
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

                elif entry.alert_value == 1:
                    if entry.machine_id + entry.breakdown_alert + entry.channel_id in processed_entries:
                        # Create a new AndonData entry for alert_value = 1 if alert raised after resolution
                        andon_entry, created = AndonData.objects.create(
                            machineId=entry.machine_id,
                            category=entry.breakdown_alert,
                            assemblyline=entry.channel_id,
                            defaults={
                                'andon_alerts': str(entry.timestamp)[:19],
                            }
                        )

                        # Calculate and set the alert_shift
                        if created:
                            andon_alert_time = datetime.strptime(andon_entry.andon_alerts, '%Y-%m-%d %H:%M:%S')
                            if 6 <= andon_alert_time.hour < 15:
                                andon_entry.alert_shift = "FS"
                            elif 14 <= andon_alert_time.hour < 23:
                                andon_entry.alert_shift = "SS"
                            elif 22 <= andon_alert_time.hour < 7:
                                andon_entry.alert_shift = "NS"
                            
                            andon_entry.save()

                        processed_entries.add(entry.machine_id + entry.breakdown_alert + entry.channel_id)

        self.stdout.write(self.style.SUCCESS('Successfully processed alert values and updated or created andon_data table entries for the last 30 days and newer ones.'))

from django.core.management.base import BaseCommand
from skf.models import BreakdownHMI, AndonData
from django.db import transaction

class Command(BaseCommand):
    help = 'Process BreakdownHMI data and update AndonData table'

    def handle(self, *args, **options):
        with transaction.atomic():
            # Get all BreakdownHMI entries sorted by timestamp
            breakdown_hmi_entries = BreakdownHMI.objects.order_by('timestamp')

            # Initialize variables to track the current alert state
            current_alert = None
            andon_entry = None

            for entry in breakdown_hmi_entries:
                if entry.alert_value == 1:
                    # Create a new AndonData entry for alert_value = 1
                    andon_entry = AndonData.objects.create(
                        machineId=entry.machine_id,
                        category=entry.breakdown_alert,
                        assemblyline=entry.channel_id,
                        andon_alerts=entry.timestamp
                    )
                    current_alert = 1

                elif entry.alert_value == 2 and current_alert == 1:
                    # Check if the timestamp of the breakdown_hmi entry is greater than the current andon_acknowledge timestamp
                    if andon_entry and (andon_entry.andon_acknowledge is None or entry.timestamp > andon_entry.andon_acknowledge):
                        andon_entry.andon_acknowledge = entry.timestamp
                    current_alert = 2

                elif entry.alert_value == 0 and current_alert == 2:
                    # Check if the timestamp of the breakdown_hmi entry is greater than the current andon_acknowledge timestamp
                    if andon_entry and (andon_entry.andon_resolved is None or entry.timestamp > andon_entry.andon_resolved):
                        andon_entry.andon_resolved = entry.timestamp
                    current_alert = 0
                    andon_entry.save()  # Save the AndonData entry

        self.stdout.write(self.style.SUCCESS('Successfully processed BreakdownHMI data and updated AndonData table.'))

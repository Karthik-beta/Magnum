from django.core.management.base import BaseCommand
from skf.models import BreakdownHMI, AndonData
from datetime import datetime
from django.utils import timezone

class Command(BaseCommand):
    help = 'Record data from BreakdownHMI to AndonData'

    def handle(self, *args, **kwargs):
        # Find records with alert_value = 1
        alert_1_data = BreakdownHMI.objects.filter(alert_value='1')

        for data in alert_1_data:
            machine_id = data.machine_id
            channel_id = data.channel_id
            breakdown_alert = data.breakdown_alert
            timestamp = data.timestamp

            # Create or retrieve an AndonData record for this machine and channel
            andon_record, created = AndonData.objects.get_or_create(
                machineId=machine_id,
                category=breakdown_alert,
                assemblyline=channel_id,
                defaults={'company': 'SKF', 'location': 'BLR', 'shopfloor': 'BALL BEARING', 'alert_shift': 'A'}
            )

            # Update andon_alerts with the timestamp (store in Django's timezone-aware datetime format)
            andon_record.andon_alerts = timestamp.replace(tzinfo=timezone.utc)
            andon_record.save()

            self.stdout.write(self.style.SUCCESS(f'Successfully recorded alert_value=1 for machine {machine_id}'))

        # Find records with alert_value = 2 for the same machine_id, breakdown_alert, and channel_id
        alert_2_data = BreakdownHMI.objects.filter(alert_value='2')

        for data in alert_2_data:
            machine_id = data.machine_id
            channel_id = data.channel_id
            breakdown_alert = data.breakdown_alert
            timestamp = data.timestamp

            # Retrieve the AndonData record for this machine and channel
            andon_record, _ = AndonData.objects.get_or_create(
                machineId=machine_id,
                category=breakdown_alert,
                assemblyline=channel_id,
                defaults={'company': 'SKF', 'location': 'BLR', 'shopfloor': 'BALL BEARING', 'alert_shift': 'A'}
            )

            # Update andon_acknowledge with the timestamp (store in Django's timezone-aware datetime format)
            andon_record.andon_acknowledge = timestamp.replace(tzinfo=timezone.utc)
            andon_record.save()

            self.stdout.write(self.style.SUCCESS(f'Successfully recorded alert_value=2 for machine {machine_id}'))

        # Find records with alert_value = 0 for the same machine_id, breakdown_alert, and channel_id
        alert_0_data = BreakdownHMI.objects.filter(alert_value='0')

        for data in alert_0_data:
            machine_id = data.machine_id
            channel_id = data.channel_id
            breakdown_alert = data.breakdown_alert
            timestamp = data.timestamp

            # Retrieve the AndonData record for this machine and channel
            andon_record, _ = AndonData.objects.get_or_create(
                machineId=machine_id,
                category=breakdown_alert,
                assemblyline=channel_id,
                defaults={'company': 'SKF', 'location': 'BLR', 'shopfloor': 'BALL BEARING', 'alert_shift': 'A'}
            )

            # Calculate the time difference and store it in andon_resolved
            alert_time = andon_record.andon_alerts
            acknowledge_time = andon_record.andon_acknowledge
            if alert_time and acknowledge_time:
                time_difference = acknowledge_time - alert_time
                andon_record.andon_resolved = time_difference.total_seconds()
                andon_record.save()

                self.stdout.write(self.style.SUCCESS(f'Successfully recorded alert_value=0 for machine {machine_id}'))

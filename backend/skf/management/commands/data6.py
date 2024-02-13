from django.core.management.base import BaseCommand
from skf.models import AndonData, BreakdownHMI
from datetime import datetime
from dateutil import parser

class Command(BaseCommand):
    help = 'Copy data from BreakdownHMI to AndonData'

    def handle(self, *args, **options):
        # Find all alerts that have been raised
        raised_alerts = BreakdownHMI.objects.filter(alert_value=1)

        for alert in raised_alerts:
            # Check if this alert has already been added to AndonData
            existing_alerts = AndonData.objects.filter(machineId=alert.machine_id, assemblyline=alert.channel_id, category=alert.breakdown_alert, andon_alerts=str(alert.timestamp))
            if existing_alerts.exists():
                continue

            # Create a new AndonData object with the alert data
            new_alert = AndonData(machineId=alert.machine_id, assemblyline=alert.channel_id, category=alert.breakdown_alert, andon_alerts=str(alert.timestamp))
            new_alert.save()

            # Find the corresponding acknowledged alert
            acknowledged_alerts = BreakdownHMI.objects.filter(machine_id=alert.machine_id, channel_id=alert.channel_id, breakdown_alert=alert.breakdown_alert, alert_value=2, timestamp__gt=alert.timestamp)
            if acknowledged_alerts.exists():
                acknowledged_alert = acknowledged_alerts.first()
                new_alert.andon_acknowledge = str(acknowledged_alert.timestamp)
                # Calculate the response time
                response_time = parser.parse(new_alert.andon_acknowledge) - parser.parse(new_alert.andon_alerts)
                new_alert.response_time = str(response_time)
                

            # Find the corresponding resolved alert
            if new_alert.andon_acknowledge:
                resolved_alerts = BreakdownHMI.objects.filter(machine_id=alert.machine_id, channel_id=alert.channel_id, breakdown_alert=alert.breakdown_alert, alert_value=0, timestamp__gt=new_alert.andon_acknowledge)
                if resolved_alerts.exists():
                    resolved_alert = resolved_alerts.first()
                    new_alert.andon_resolved = str(resolved_alert.timestamp)
                    new_alert.repair_time = str(parser.parse(str(resolved_alert.timestamp)) - parser.parse(new_alert.andon_acknowledge))

            # Calculate the alert shift
            andon_alert_time = parser.parse(new_alert.andon_alerts)
            if 7 <= andon_alert_time.hour < 15:
                new_alert.alert_shift = "FS"
            elif 15 <= andon_alert_time.hour < 23:
                new_alert.alert_shift = "SS"
            elif 23 <= andon_alert_time.hour < 7:
                new_alert.alert_shift = "NS"

            # Calculate the total time
            if new_alert.andon_alerts and new_alert.andon_resolved:
                total_time = parser.parse(new_alert.andon_resolved) - parser.parse(new_alert.andon_alerts)
                new_alert.total_time = str(total_time)

            new_alert.save()
# Generated by Django 4.2.5 on 2023-09-23 07:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('skf', '0016_remove_andon_alert_shift_remove_andon_company_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='andondata',
            name='alert_shift',
        ),
        migrations.RemoveField(
            model_name='andondata',
            name='company',
        ),
        migrations.RemoveField(
            model_name='andondata',
            name='location',
        ),
        migrations.RemoveField(
            model_name='andondata',
            name='shopfloor',
        ),
    ]

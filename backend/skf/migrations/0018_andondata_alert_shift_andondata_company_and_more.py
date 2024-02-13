# Generated by Django 4.2.5 on 2023-09-23 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skf', '0017_remove_andondata_alert_shift_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='andondata',
            name='alert_shift',
            field=models.CharField(default=None, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='andondata',
            name='company',
            field=models.CharField(default='SKF', max_length=10),
        ),
        migrations.AddField(
            model_name='andondata',
            name='location',
            field=models.CharField(default='BLR', max_length=10),
        ),
        migrations.AddField(
            model_name='andondata',
            name='shopfloor',
            field=models.CharField(default='BALL BEARING', max_length=30),
        ),
    ]

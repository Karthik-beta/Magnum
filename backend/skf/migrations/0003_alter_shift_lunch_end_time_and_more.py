# Generated by Django 4.2.5 on 2023-09-07 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skf', '0002_shift'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shift',
            name='lunch_end_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='shift',
            name='lunch_start_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
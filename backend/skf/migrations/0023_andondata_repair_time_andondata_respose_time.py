# Generated by Django 4.2.5 on 2023-09-26 04:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skf', '0022_delete_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='andondata',
            name='repair_time',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='andondata',
            name='respose_time',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]

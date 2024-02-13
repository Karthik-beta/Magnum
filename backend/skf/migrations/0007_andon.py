# Generated by Django 4.2.5 on 2023-09-11 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skf', '0006_machine'),
    ]

    operations = [
        migrations.CreateModel(
            name='Andon',
            fields=[
                ('login', models.CharField(default='XYZ', max_length=255)),
                ('machineId', models.CharField(max_length=255)),
                ('ticket', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=255)),
                ('sub_category', models.CharField(max_length=255)),
                ('andon_alerts', models.DateTimeField(null=True)),
                ('andon_acknowledge', models.DateTimeField(null=True)),
                ('andon_resolved', models.DateTimeField(null=True)),
                ('total_time', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'db_table': 'andon',
            },
        ),
    ]
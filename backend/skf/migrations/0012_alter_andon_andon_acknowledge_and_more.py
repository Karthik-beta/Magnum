# Generated by Django 4.2.5 on 2023-09-20 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skf', '0011_alter_andon_andon_acknowledge_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='andon',
            name='andon_acknowledge',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='andon',
            name='andon_resolved',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='andon',
            name='assemblyline',
            field=models.CharField(max_length=30),
        ),
    ]
# Generated by Django 3.1.5 on 2023-03-05 12:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_auto_20230217_1736'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='partners',
            name='org_nr',
        ),
    ]
# Generated by Django 3.1.5 on 2021-09-04 17:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_auto_20210904_2005'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='paid_amount',
        ),
    ]

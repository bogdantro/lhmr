# Generated by Django 3.1.5 on 2023-01-29 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20230128_2011'),
    ]

    operations = [
        migrations.AddField(
            model_name='partners',
            name='is_payed_member',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]

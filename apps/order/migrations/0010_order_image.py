# Generated by Django 3.1.5 on 2021-09-05 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0009_auto_20210905_1412'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='image',
            field=models.ImageField(blank=True, upload_to='order-logo-images'),
        ),
    ]

# Generated by Django 3.1.5 on 2021-09-09 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0006_auto_20210909_1801'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/order-logo-images'),
        ),
    ]

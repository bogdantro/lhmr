# Generated by Django 3.1.5 on 2022-02-27 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0022_auto_20220226_1406'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(blank=True, max_length=700),
        ),
        migrations.AlterField(
            model_name='order',
            name='message',
            field=models.CharField(blank=True, max_length=700),
        ),
    ]
# Generated by Django 3.1.5 on 2022-03-13 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0025_order_after_14_days'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='status',
        ),
        migrations.AddField(
            model_name='order',
            name='status_1',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_2',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_3',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_4',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_5',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_6',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_7',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='status_8',
            field=models.BooleanField(default=False),
        ),
    ]
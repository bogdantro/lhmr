# Generated by Django 3.2.6 on 2021-08-22 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_remove_product_short_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='label',
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 3.1.5 on 2023-03-05 13:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0015_product_seo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='seo',
        ),
    ]

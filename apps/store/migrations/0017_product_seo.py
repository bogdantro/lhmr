# Generated by Django 3.1.5 on 2023-03-07 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0016_remove_product_seo'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='seo',
            field=models.TextField(blank=True),
        ),
    ]

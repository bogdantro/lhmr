# Generated by Django 3.1.5 on 2021-09-04 18:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0004_auto_20210904_2120'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='product',
            new_name='products',
        ),
        migrations.RenameField(
            model_name='product_choices',
            old_name='product',
            new_name='products',
        ),
    ]
# Generated by Django 3.1.5 on 2023-01-14 12:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='discount_price',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_big',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_blog',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_custom',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_middle',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_pers',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_portfolio',
        ),
        migrations.RemoveField(
            model_name='product',
            name='is_small',
        ),
    ]
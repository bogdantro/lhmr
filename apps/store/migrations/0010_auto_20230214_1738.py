# Generated by Django 3.1.5 on 2023-02-14 15:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_auto_20230211_1328'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='views',
        ),
        migrations.DeleteModel(
            name='IpModel',
        ),
    ]
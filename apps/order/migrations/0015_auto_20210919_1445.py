# Generated by Django 3.1.5 on 2021-09-19 11:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0014_auto_20210919_1433'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='first_name',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='order',
            name='last_name',
        ),
    ]

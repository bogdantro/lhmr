# Generated by Django 3.1.5 on 2021-09-24 17:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0019_auto_20210924_2036'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='hml',
            new_name='html',
        ),
    ]

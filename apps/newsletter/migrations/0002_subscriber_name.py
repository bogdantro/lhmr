# Generated by Django 3.1.5 on 2021-04-10 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscriber',
            name='name',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]

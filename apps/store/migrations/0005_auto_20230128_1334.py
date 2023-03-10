# Generated by Django 3.1.5 on 2023-01-28 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_auto_20230128_1323'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='contact_by_email',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='contact_by_facebook',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='contact_by_instagram',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='contact_by_phone',
            field=models.FloatField(blank=True, default=0, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='contact_by_website',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]

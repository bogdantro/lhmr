# Generated by Django 3.1.5 on 2023-01-20 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_productreview_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productreview',
            name='star1',
        ),
        migrations.RemoveField(
            model_name='productreview',
            name='star2',
        ),
        migrations.RemoveField(
            model_name='productreview',
            name='star3',
        ),
        migrations.RemoveField(
            model_name='productreview',
            name='star4',
        ),
        migrations.RemoveField(
            model_name='productreview',
            name='star5',
        ),
        migrations.RemoveField(
            model_name='productreview',
            name='star6',
        ),
        migrations.AddField(
            model_name='productreview',
            name='stars',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]

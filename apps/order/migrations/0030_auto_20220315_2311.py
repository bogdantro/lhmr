# Generated by Django 3.1.5 on 2022-03-15 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0029_order_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='short_name',
            field=models.CharField(default='Nettbutikk', editable=False, max_length=150),
        ),
    ]

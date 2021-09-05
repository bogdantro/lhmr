# Generated by Django 3.1.5 on 2021-09-05 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0007_order_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='hosting',
            field=models.CharField(choices=[('no', 'Nei'), ('yes', 'Ja')], default='no', max_length=50),
        ),
        migrations.AlterField(
            model_name='order',
            name='products',
            field=models.CharField(choices=[('none', '-------'), ('ecommerce', 'Ecommerce'), ('blog', 'Blog'), ('personal', 'Personal'), ('business', 'Business')], default='none', max_length=50),
        ),
    ]

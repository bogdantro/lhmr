# Generated by Django 3.1.5 on 2021-09-05 17:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('message', models.CharField(blank=True, max_length=500)),
                ('products', models.CharField(choices=[('none', '-------'), ('ecommerce', 'Ecommerce'), ('blog', 'Blog'), ('personal', 'Personal'), ('business', 'Bedrift')], default='none', max_length=50)),
                ('hosting', models.CharField(choices=[('none', '-------'), ('no', 'Nei'), ('yes', 'Ja')], default='none', max_length=50)),
                ('image', models.ImageField(blank=True, upload_to='order-logo-images')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('paid', models.BooleanField(default=False)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

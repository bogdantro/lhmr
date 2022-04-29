import datetime

from django.urls import reverse
from django.contrib import admin
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe

from .models import Order



class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'id', 'user']

admin.site.register(Order, OrderAdmin)


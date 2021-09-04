import datetime

from django.urls import reverse
from django.contrib import admin
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe

from .models import Order

def order_name(obj):
    return '%s %s' % (obj.first_name, obj.last_name)
order_name.short_description = 'Name'


class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', order_name, 'created_at']
    list_filter = ['created_at']
    search_fields = ['first_name', 'address']

admin.site.register(Order, OrderAdmin)


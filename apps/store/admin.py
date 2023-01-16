from apps.store.models import Product
from django.contrib import admin
from .models import *

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price',]
admin.site.register(Product, ProductAdmin)


admin.site.register(Category)
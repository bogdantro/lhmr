from apps.store.models import Product
from django.contrib import admin
from .models import Product

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'discount_price', 'is_small','is_middle','is_big' ]
admin.site.register(Product, ProductAdmin)

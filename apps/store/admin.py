from apps.store.models import Product
from django.contrib import admin
from .models import Product

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'is_ecommerce','is_blog','is_portofolio','is_personal','is_business' ]
admin.site.register(Product, ProductAdmin)

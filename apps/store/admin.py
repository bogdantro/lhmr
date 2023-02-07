from apps.store.models import Product
from django.contrib import admin
from .models import *

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'business_name', 'slug', 'category', 'is_home_page',]
    search_fields = ('name', 'business_name', 'slug', 'category', 'is_home_page', 'description')
    list_filter = ('is_home_page',)
    list_editable = ('is_home_page', 'business_name', 'slug', 'category',)
admin.site.register(Product, ProductAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'short_des', 'is_home_page', 'icon',]
    search_fields = ('name', 'slug')
    list_filter = ('is_home_page',)
    list_editable = ('is_home_page', 'slug', 'short_des', 'icon',)
admin.site.register(Category, CategoryAdmin)


class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ['product', 'title', 'stars', 'created_at', 'is_conf']
    search_fields = ('product', 'title', 'content')
    list_filter = ('is_conf',)
    list_editable = ('is_conf',)
admin.site.register(ProductReview, ProductReviewAdmin)
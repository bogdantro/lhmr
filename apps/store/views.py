from django.shortcuts import render, redirect,get_object_or_404
from django.views import generic
from .models import Product




def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)  

    context = {
        'product': product,
    }

    return render(request, 'core/product.html', context)
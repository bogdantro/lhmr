from django.shortcuts import render, redirect,get_object_or_404
from django.views import generic
from .models import Product
from apps.cart.cart import Cart




def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    cart = Cart(request)    

    if cart.has_product(product.id):
        product.in_cart = True
    else:
        product.in_cart = False   

    context = {
        'product': product,
    }

    return render(request, 'core/product.html', context)
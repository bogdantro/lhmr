from django.shortcuts import render
from apps.store.models import Product
from apps.cart.cart import Cart


def hjemme(request):
    products = Product.objects.all()
    cart = Cart(request)    

    for product in products:
        if cart.has_product(product.id):
            product.in_cart = True
        else:
            product.in_cart = False    

    context = {
        'products':products,
    }

     
    return render(request, 'core/home.html', context)
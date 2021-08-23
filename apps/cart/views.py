from django.shortcuts import render
from django.conf import settings
from .cart import Cart

# Create your views here.

def cart_detail(request):
    cart = Cart(request)
    productsstring = ''

    for item in cart:
        product = item['product']
        p = "{'id': '%s', 'name': '%s', 'price': '%s', 'total_price': '%s'}," % (product.id, product.name, product.price, item['total_price'])

        productsstring = productsstring + p
        
     

    if request.user.is_authenticated:
        first_name = request.user.first_name
        last_name = request.user.last_name
        email = request.user.email
    else:
        first_name = last_name = email = ''     

    context = {
        'cart': cart,
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'productsstring': productsstring.rstrip(','),
        
    }
    
    return render(request, 'core/cart.html', context)

def success(request):
    cart = Cart(request)
    cart.clear()

    return render(request, 'core/success.html')

def checkout(request):
    return render(request, 'core/checkout.html')    
import json

from django.conf import settings
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404, redirect

from apps.cart.cart import Cart

from apps.order.utils import checkout

from .models import Product
from apps.order.models import Order, OrderItem

from .utilities import decrement_product_quantity

def create_checkout_session(request):
    data = json.loads(request.body)


    cart = Cart(request)
    items = []
    
    for item in cart:
        product = item['product']

        price = int(product.price * 100)

        obj = {
            'price_data': {
                'currency': 'nok',
                'product_data': {
                    'name': product.name
                },
                'unit_amount': price
            },
        }

        items.append(obj)

    gateway = data['gateway']
    session = ''
    order_id = ''
    payment_intent = ''
    

    for item in cart:
        product = item['product']
        total_price = total_price + (float(product.price))

        

    return JsonResponse({'session': session, 'order': payment_intent})

def api_add_to_cart(request):
    data = json.loads(request.body)
    jsonresponse = {'succes': True}
    product_id = data['product_id']
    update = data['update']
    quantity = data['quantity']

    cart = Cart(request)

    product = get_object_or_404(Product, pk=product_id)

    if not update:
        cart.add(product=product, quantity=1, update_quantity=False)
    else:
        cart.add(product=product, quantity=quantity, update_quantity=True)

    return JsonResponse(jsonresponse)       


def api_remove_from_cart(request):
    data = json.loads(request.body)
    jsonresponse = {'succes': True}
    product_id = str(data['product_id'])

    cart = Cart(request)
    cart.remove(product_id)

    return JsonResponse(jsonresponse)  


def api_can_use(request):
    json_response = {}

    coupon_code = request.GET.get('coupon_code', '')

    try:
        coupon = Coupon.objects.get(code=coupon_code)

        if coupon.can_use():
            json_response = {'amount': coupon.value}
        else:
            json_response = {'amount': 0}
    except Exception:
        json_response = {'amount': 0}

    return JsonResponse(json_response)

def api_remove_from_cart(request):
    data = json.loads(request.body)
    jsonresponse = {'success': True}
    product_id = str(data['product_id'])

    cart = Cart(request)
    cart.remove(product_id)

    return JsonResponse(jsonresponse)
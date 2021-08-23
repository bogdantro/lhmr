from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.http import HttpResponse

def decrement_product_quantity(order):
    for item in order.items.all():
        product = item.product
        product.num_available = product.num_available - item.quantity
        product.save()

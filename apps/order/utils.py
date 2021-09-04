import datetime
import os
from random import randint
from apps.order.models import Order, OrderItem

def checkout(request, first_name, last_name, email):
    order = Order(first_name=first_name, last_name=last_name, email=email)
    
    if request.user.is_authenticated:
        order.user = request.user
    
    order.save()


    return order.id    
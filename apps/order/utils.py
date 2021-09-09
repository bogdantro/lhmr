import datetime
import os
from random import randint
from apps.order.models import Order

def checkout(request):
    order = Order()
    
    if request.user.is_authenticated:
        order.user = request.user
    
    order.save()


    return order.id    
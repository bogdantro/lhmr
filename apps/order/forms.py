from django.db.models import fields
from apps.store.models import Product
from django import forms
from .models import Order

class Order(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(Order, self).__init__(*args, **kwargs)

    class Meta:
        model = Order
        fields = ('name', 'email', 'message', 'product', 'product_price', 'tag')

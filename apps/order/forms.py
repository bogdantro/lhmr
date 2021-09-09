from django.db.models import fields
from apps.store.models import Product
from django import forms
from .models import Order

class Order(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(Order, self).__init__(*args, **kwargs)
        self.fields['products'].widget.attrs = {'class': 'order-products',}
        self.fields['products'].required = True
        self.fields['products'].error_messages = {'required': 'Du må velge et nettside'}
        self.fields['hosting'].widget.attrs = {'class': 'order-hosting',}
        self.fields['hosting'].required = True
        self.fields['image'].widget.attrs = {'class': 'order-image',}
        self.fields['color'].required = True


    class Meta:
        model = Order
        fields = ('first_name', 'last_name', 'email', 'products', 'message', 'hosting', 'image', 'color',)

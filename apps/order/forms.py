from django.db.models import fields
from apps.store.models import Product
from django import forms
from .models import Order

class Order(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.Meta.required:
            self.fields[field].required = True

    class Meta:
        model = Order
        fields = ('first_name', 'last_name', 'email', 'products', 'message', 'hosting', 'image',)
        required = ('products', 'hosting',)

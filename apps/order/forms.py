from django.db.models import fields
from apps.store.models import Product
from django import forms
from .models import Order

class Order(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(Order, self).__init__(*args, **kwargs)
        self.fields['products'].widget.attrs = {'class': 'order-products input',}
        self.fields['hosting'].widget.attrs = {'class': 'order-hosting input',}
        self.fields['image'].widget.attrs = {'class': 'order-image input',}
        self.fields['color'].required = True


    class Meta:
        model = Order
        fields = ('name', 'email', 'products', 'message', 'hosting', 'image', 'color', 'num_pages', 
        'color_hex', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'css', 'html', 'javascript', 'python_django',
        )

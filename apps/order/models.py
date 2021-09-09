  
from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.utils import tree
from colorfield.fields import ColorField

from apps.store.models import Product

PRODUCT_CHOICES = (
    ('ecommerce','Ecommerce'),
    ('blog', 'Blog'),
    ('personal','Personal'),
    ('business','Bedrift'),
)
HOSTING_CHOICES = (
    ('no','Nei'),
    ('yes','Ja'),
)
class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.SET_NULL, blank=True, null=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    products = models.CharField(max_length=50, choices=PRODUCT_CHOICES, blank=False)
    hosting = models.CharField(max_length=50, choices=HOSTING_CHOICES, blank=False)
    color = ColorField(blank=False)
    image = models.ImageField(upload_to='order-logo-images', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)

    def __str__(self):
        return '%s' % self.first_name
    
    def get_total_quantity(self):
        return sum(int(item.quantity) for item in self.items.all())
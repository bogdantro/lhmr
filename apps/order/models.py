  
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
    ('portofolio','Portofolio'),
    ('custom','Custom'),
)
HOSTING_CHOICES = (
    ('no','Nei'),
    ('yes','Ja'),
)
class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    products = models.CharField(max_length=50, blank=False)
    hosting = models.CharField(max_length=50, blank=False)
    color = ColorField()
    color_hex = models.CharField(max_length=20, blank=True)
    image = models.ImageField(upload_to='order-logo-images', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    num_pages = models.IntegerField(blank=False, null=True)
    def __str__(self):
        return '%s' % self.first_name
    
    def get_total_quantity(self):
        return sum(int(item.quantity) for item in self.items.all())
  
from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.utils import tree
from colorfield.fields import ColorField

from apps.store.models import Product

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
    # PAGES
    num_pages = models.IntegerField(blank=True, null=True)
    page1 = models.CharField(max_length=300, blank=True)
    page2 = models.CharField(max_length=300, blank=True)
    page3 = models.CharField(max_length=300, blank=True)
    page4 = models.CharField(max_length=300, blank=True)
    page5 = models.CharField(max_length=300, blank=True)
    page6 = models.CharField(max_length=300, blank=True)
    page7 = models.CharField(max_length=300, blank=True)
    page8 = models.CharField(max_length=300, blank=True)
    page9 = models.CharField(max_length=300, blank=True)
    page10 = models.CharField(max_length=300, blank=True)
    # EXPERIENCE
    css = models.CharField(max_length=30, blank=False, default="")
    html = models.CharField(max_length=30, blank=False, default="")
    javascript = models.CharField(max_length=30, blank=False, default="")
    python_django = models.CharField(max_length=30, blank=False, default="")
    

    def __str__(self):
        return '%s' % self.name
    
    def get_total_quantity(self):
        return sum(int(item.quantity) for item in self.items.all())
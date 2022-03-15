  
from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.utils import tree


class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    message = models.CharField(max_length=700, blank=True)
    product = models.CharField(max_length=50)
    product_price = models.FloatField(max_length=300, default=0)
    short_name = models.CharField(max_length=150, default='Nettbutikk')
    tag = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    hosting = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)
    after_14_days = models.BooleanField(default=False)
    status_1 = models.BooleanField(default=False)
    status_2 = models.BooleanField(default=False)
    status_3 = models.BooleanField(default=False)
    status_4 = models.BooleanField(default=False)
    status_5 = models.BooleanField(default=False)
    status_6 = models.BooleanField(default=False)
    status_7 = models.BooleanField(default=False)
    status_8 = models.BooleanField(default=False)
    
    

    def __str__(self):
        return '%s' % self.name
    

  
from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.utils import tree


class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.SET_NULL, blank=True, null=True)
    user_html = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    message = models.CharField(max_length=700, blank=True)
    product = models.CharField(max_length=50)
    short_name = models.CharField(max_length=50, blank=True)
    product_price = models.FloatField(max_length=300, default=0)
    tag = models.CharField(max_length=150, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    hosting = models.BooleanField(default=False)
    # FOR UI/UX * MUST BE LIKE THIS, SO THE USER CAN NAVIGATE EASIER
    is_finished = models.BooleanField(default=False)
    is_confirmed = models.BooleanField(default=False)
    # END FOR UI/UX
    after_14_days = models.BooleanField(default=False)
    status_1 = models.BooleanField(default=False)
    status_2 = models.BooleanField(default=False)
    status_3 = models.BooleanField(default=False)
    status_4 = models.BooleanField(default=False)
    status_5 = models.BooleanField(default=False)

    
    

    def __str__(self):
        return '%s' % self.name
    

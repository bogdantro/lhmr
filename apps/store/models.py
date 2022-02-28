from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(max_length=300, default=0)
    discount_price = models.FloatField(max_length=300, default=0)
    slug = models.SlugField(max_length=150)
    description = models.TextField()
    is_small = models.BooleanField(default=False)
    is_middle = models.BooleanField(default=False)
    is_big = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    

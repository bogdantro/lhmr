from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(max_length=300, default=0)
    discount_price = models.FloatField(max_length=300, default=0)
    slug = models.SlugField(max_length=150)
    description = models.TextField()
    image = models.ImageField(blank=True, null=True)
    is_sale = models.BooleanField(default=False)
    is_ecommerce = models.BooleanField(default=False)
    is_blog = models.BooleanField(default=False)
    is_portofolio = models.BooleanField(default=False)
    is_personal = models.BooleanField(default=False)
    is_business = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    

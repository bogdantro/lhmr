from django.db import models
from django.conf import settings

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=60)
    slug = models.SlugField(max_length=150)
    short_des = models.CharField(max_length=500)
    icon = models.CharField(max_length=1000)
    is_home_page = models.BooleanField(default=False)


    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return '/%s/' % (self.slug)

class Product(models.Model):
    # GLOBAL
    name = models.CharField(max_length=300)
    price = models.FloatField(max_length=300, default=0)
    slug = models.SlugField(max_length=150)
    address = models.CharField(max_length=500)
    business_name = models.CharField(max_length=300)
    short_description = models.TextField()
    image = models.ImageField(blank=False, default='none')
    is_home_page = models.BooleanField(default=False)
    description = models.TextField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

    @property
    def image_url(self):
        return '%s%s' % (settings.ALLOWED_HOSTS, self.image.url) if self.image else ''    
    

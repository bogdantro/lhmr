from django.db import models
from django.conf import settings
from django.utils.text import slugify

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=60)
    slug = models.SlugField(max_length=150)
    short_des = models.CharField(max_length=500, blank=True)
    icon = models.CharField(max_length=1000, blank=True)
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
    business_name = models.CharField(max_length=300)
    slug = models.SlugField(max_length=150)
    description = models.TextField(blank=False)
    short_description = models.TextField(blank=True)
    price = models.FloatField(max_length=300, default=0, blank=True, null=True)
    address = models.CharField(max_length=500, blank=True)
    cords1 = models.CharField(max_length=500, blank=True)
    cords2 = models.CharField(max_length=500, blank=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    is_home_page = models.BooleanField(default=False)
    # Openin hours
    mandag = models.CharField(max_length=500)
    tirsdag = models.CharField(max_length=500)
    ondsdag = models.CharField(max_length=500)
    torsdag = models.CharField(max_length=500)
    fredag = models.CharField(max_length=500)
    lørdag = models.CharField(max_length=500)
    søndag = models.CharField(max_length=500)
    # Images
    image1 = models.ImageField(blank=False, default='', upload_to='other/products/')
    image2 = models.ImageField(blank=True, default='', upload_to='other/products/')
    image3 = models.ImageField(blank=True, default='', upload_to='other/products/')
    image4 = models.ImageField(blank=True, default='', upload_to='other/products/')
    image5 = models.ImageField(blank=True, default='', upload_to='other/products/')
    image6 = models.ImageField(blank=True, default='', upload_to='other/products/')
    #Contact 
    contact_by_phone = models.FloatField(max_length=400, blank=True, null=True)
    contact_by_email = models.CharField(max_length=400, blank=True, null=True)
    contact_by_instagram = models.CharField(max_length=400, blank=True, null=True)
    contact_by_facebook = models.CharField(max_length=400, blank=True, null=True)
    contact_by_website = models.CharField(max_length=400, blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        return super(Product, self).save(*args, **kwargs)


    def get_rating(self):
        if self.reviews.count() > 0:
            total = sum(int(review['stars']) for review in self.reviews.values())   
            return total / self.reviews.count()
        else:
            return 0 


    @property
    def image_url(self):
        return '%s%s' % (settings.ALLOWED_HOSTS, self.image.url) if self.image else ''    
    
class ProductReview(models.Model):
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    title = models.CharField(max_length=800)
    content = models.TextField(blank=True, max_length=1500)
    stars = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_conf = models.BooleanField(default=False)
    
    def __str__(self):
        return str(self.product)   


# / self.reviews.count()  
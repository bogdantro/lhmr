from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from apps.store.models import *

class StaticViewsSitemap(Sitemap):
    changefreq = 'always'
    
    def items(self):
        return['about', 'hjemme', 'allProducts', 'business']
    
    def location(self, item):
        return reverse(item)
    

class ProductSitemap(Sitemap):

    def items(self):
        return Product.objects.all()    
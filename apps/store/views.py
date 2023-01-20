from webbrowser import get
from django.shortcuts import render, redirect,get_object_or_404
from django.views import generic
from .models import *
from django.conf import settings
from django.db.models import Count




def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)  
    mapbox_access_token = settings.MAP_BOX_ACCESS_TOKEN 
    
    # review = ProductReview.objects.filter(pk=review.pk)
    # review_stars = review.stars + review.stars 

    context = {
        'product': product,
        'mapbox_access_token': mapbox_access_token,
    }

    return render(request, 'core/product.html', context)

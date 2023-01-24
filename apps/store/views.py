from webbrowser import get
from django.shortcuts import render, redirect,get_object_or_404
from django.views import generic
from .models import *
from django.conf import settings
from django.db.models import Count
from django.db.models import Avg




def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)  
    mapbox_access_token = settings.MAP_BOX_ACCESS_TOKEN 

    context = {
        'product': product,
        'mapbox_access_token': mapbox_access_token,
    }

    return render(request, 'core/product.html', context)

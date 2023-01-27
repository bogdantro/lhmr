import warnings

from django.shortcuts import *
from django.http import *
from apps.store.models import *
from django.core.mail import *
from apps.userprofile.forms import *
from django.contrib.auth import *
from django.template.loader import *
from textwrap import *
from django.views.decorators.csrf import *
from django.db.models import * 
from .models import *
from django.contrib.auth.decorators import *
from .forms import * 
from django.conf import settings



def hjemme(request,  backend='django.contrib.auth.backends.ModelBackend'):
    products = Product.objects.filter(is_home_page=True)
    category = Category.objects.filter(is_home_page=True)
    mapbox_access_token = settings.MAP_BOX_ACCESS_TOKEN 

    context = {
    'products':products,
    'category':category,
    'mapbox_access_token':mapbox_access_token,
    }
    return render(request, 'core/home.html', context)

# Pages
    # About
        # About
def about(request):
    return render(request, 'pages/about/about.html')

def allProducts(request):
    products = Product.objects.all()
    category = Category.objects.all()

    context = {
        'products': products,
        'category': category,
    }
    return render(request, 'pages/all-pr/all-pr.html', context)

    # Kundeservice
def contact(request):
    if request.method=='POST' and 'contact' in request.POST:
        navn = request.POST.get('navn')
        email = request.POST.get('email')
        message = request.POST.get('message')

        data = {
            'navn': navn,
            'email': email,
            'message': message,
        }
        message = dedent('''
        Fra: {}

        Navn: {}

        Beskjed: {}
        ''').format(data['email'], data['navn'], data['message'], )
        send_mail('Webiser Contact Form', message, '', ['sabertoothtri@gmail.com'])
        return redirect('/kontakt-utfort/webiser/email-kundeservice')
    return render(request, 'pages/kundeservice/contact.html')   

@csrf_exempt
def home_page_search(request):
    query = request.GET.get('q','')
    #The empty string handles an empty "request"
    if query:
            queryset = (Q(name__icontains=query) | Q(description__icontains=query) | Q(business_name__icontains=query))
            #I assume "text" is a field in your model
            #i.e., text = model.TextField()
            #Use | if searching multiple fields, i.e., 
            #queryset = (Q(text__icontains=query))|(Q(other__icontains=query))
            results = Product.objects.filter(queryset).distinct()
    else:
       results = []
    return render(request, 'core/search-results.html', {'results':results, 'query':query})

    #You can also set context = {'results':results, 'query':query} after 
    #the else: (same indentation as return statement), and 
    #use render(request, 'home.html', context) if you prefer. 

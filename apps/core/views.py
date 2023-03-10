import warnings
import random
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
    map_products = Product.objects.all()
    category = Category.objects.filter(is_home_page=True)
    mapbox_access_token = settings.MAP_BOX_ACCESS_TOKEN 

    context = {
    'products':products,
    'category':category,
    'map_products':map_products,
    'mapbox_access_token':mapbox_access_token,
    }
    return render(request, 'core/home.html', context)

# statistics
def statistics(request):
    return render(request, 'pages/statistics/statistic.html')

# Pages
def about(request):
    return render(request, 'pages/about/about.html')
    
def business(request):
    return render(request, 'pages/business/business.html')

def be_partner(request):
    if request.method == 'POST':
        name = request.POST.get('name', )
        contact_person = request.POST.get('contact_person', '')
        email = request.POST.get('email', '')

        partner = Partners.objects.create(name=name, contact_person=contact_person, email=email)
        return redirect('partner_success')
    return render(request, 'pages/business/be-partner.html')


def partner_success(request):
    return render(request, 'pages/business/partner-success.html')    

def make_serv(request):
    if request.method == 'POST':
        name = request.POST.get('name', )
        contact_person = request.POST.get('contact_person', '')
        email = request.POST.get('email', '')


        partner = Partners.objects.create(name=name, contact_person=contact_person, email=email)
        return redirect('/')
    return render(request, 'pages/business/make-serv.html')

def allProducts(request):
    count = Product.objects.count()

    category = Category.objects.all()

    products = list(Product.objects.all())

    products = random.sample(products, count)

    context = {
        'products': products,
        'category': category,
        'count': count,
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


def vilk??r(request):
    return render(request, 'pages/legal/vilk??r.html')

def policy(request):
    return render(request, 'pages/legal/policy.html')




@csrf_exempt
def home_page_search(request):
    query = request.GET.get('q','')
    #The empty string handles an empty "request"
    arandom = list(Product.objects.all())

    arandom = random.sample(arandom, 15)
    if query:
            queryset = (Q(name__icontains=query) | Q(description__icontains=query) | Q(seo__icontains=query) | Q(business_name__icontains=query) )
            #I assume "text" is a field in your model
            #i.e., text = model.TextField()
            #Use | if searching multiple fields, i.e., 
            #queryset = (Q(text__icontains=query))|(Q(other__icontains=query))
            results = Product.objects.filter(queryset).distinct()
    else:
       results = []
    return render(request, 'core/search-results.html', {'results':results, 'query':query, 'arandom':arandom})

    #You can also set context = {'results':results, 'query':query} after 
    #the else: (same indentation as return statement), and 
    #use render(request, 'home.html', context) if you prefer. 

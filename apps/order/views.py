from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from .forms import Order
from django.template import RequestContext
from base64 import b64encode
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from textwrap import dedent
from apps.userprofile.forms import UserprofileForm




def send_order(request):
    if request.method == 'POST' and 'order' in request.POST:
        form = Order(request.POST, request.FILES)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            product = form.cleaned_data['product']
            product_price = form.cleaned_data['product_price']
            tag = form.cleaned_data['tag']
            user = form.cleaned_data['user_html']

            form.save()
            
            text1 = 'Du har motatt en bestiling. Sjekk under hva bestillingen handler om, og send en mail til klienten med info om hva som skal skje videre'
            text2 = 'Husk å gå til bestillingen i backend, for å endre bruker til den som står over!!'
            data = {
                'email':email,
                'message':message,
                'name':name,
                'text1':text1,
                'text2':text2,
                'product':product,
                'user':user,
            }
            message = dedent('''
            {}

            Navn: {}


            Epost: {} 
            
            ---------------------------
            Brukernavn: {}

            {}
            ---------------------------


            Produkt: {}

            Noe kunden vil fortelle oss: {}
            ''').format(data['text1'], data['name'], data['email'], data['user'], data['text2'], data['product'], data['message'])
            send_mail('Du har motatt en bestiling', message, '', ['sabertoothtri@gmail.com'])
            return redirect('/bestilling-utfort/webiser/bestilling')
    else:
        form = Order()

    return render(request, 'core/order.html', {'form': form})

def order_success(request):
    return render(request, 'core/success.html')    

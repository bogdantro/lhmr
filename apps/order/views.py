from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from .forms import Order
from django.template import RequestContext
from base64 import b64encode
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings



def send_order(request):
    if request.method == 'POST' and 'order' in request.POST:
        form = Order(request.POST, request.FILES)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            products = form.cleaned_data['products']
            hosting = form.cleaned_data['hosting']
            image = form.cleaned_data['image']
            color = form.cleaned_data['color']
            color_hex = form.cleaned_data['color_hex']
            num_pages = form.cleaned_data['num_pages']
            form.save()
            
            text = 'Du har motatt en bestiling. Sjekk under hva bestillingen handler om, og send en mail til klienten med info om hva som skal skje videre'
            data = {
                'email':email,
                'products':products,
                'message':message,
                'num_pages':num_pages,
                'hosting':hosting,
                'color':color,
                'color_hex':color_hex,
                'text':text,
                'name':name,
            }
            message = '''
            {}

            Fra: {} {} 

            Produkt: {}
            Antall Sider: {}
            Hosting: {}

            Farge: {}    
            Farge(Hex) {}
            Om Bedrift: {}
            '''.format(data['text'], data['name'], data['email'], data['products'], data['num_pages'], data['hosting'], data['color'], data['color_hex'], data['message'])
            send_mail('Du har motatt en bestiling', message, '', ['sabertoothtri@gmail.com'])
            return redirect('/bestilling-utfort:1-2-3-4')
    else:
        form = Order()

    return render(request, 'core/order.html', {'form': form})

def order_success(request):
    return render(request, 'core/success.html')    

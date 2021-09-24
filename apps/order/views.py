from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from .forms import Order
from django.template import RequestContext
from base64 import b64encode
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from textwrap import dedent



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
            page1 = form.cleaned_data['page1']
            page2 = form.cleaned_data['page2']
            page3 = form.cleaned_data['page3']
            page4 = form.cleaned_data['page4']
            page5 = form.cleaned_data['page5']
            page6 = form.cleaned_data['page6']
            page7 = form.cleaned_data['page7']
            page8 = form.cleaned_data['page8']
            page9 = form.cleaned_data['page9']
            page10 = form.cleaned_data['page10']
            css = form.cleaned_data['css']
            html = form.cleaned_data['html']
            javascript = form.cleaned_data['javascript']
            python_django = form.cleaned_data['python_django']
            
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
                'page1':page1,
                'page2':page2,
                'page3':page3,
                'page4':page4,
                'page5':page5,
                'page6':page6,
                'page7':page7,
                'page8':page8,
                'page9':page9,
                'page10':page10,
                'css':css,
                'html':html,
                'javascript':javascript,
                'python_django':python_django,
            }
            message = dedent('''
            {}

            Fra: {} {}

            Produkt: {}
            Hosting: {}
            Antall Sider: {}

            Farge: {}    
            Farge(Hex): {}

            Erfaring:
            -----------------
            Css {}
            Html {}
            JavaScript {}
            Python/Django {}
            -----------------

            Om Bedrift: {}
            ''').format(data['text'], data['name'], data['email'], data['products'], data['hosting'], data['num_pages'], data['color'], data['color_hex'], data['css'], data['html'], data['javascript'], data['python_django'], data['message'])
            send_mail('Du har motatt en bestiling', message, '', ['sabertoothtri@gmail.com'])
            return redirect('/bestilling-utfort/webiser/bestilling')
    else:
        form = Order()

    return render(request, 'core/order.html', {'form': form})

def order_success(request):
    return render(request, 'core/success.html')    

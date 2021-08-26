from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from apps.cart.cart import Cart
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError




def hjemme(request):
    products = Product.objects.all()
    cart = Cart(request)    

    for product in products:
        if cart.has_product(product.id):
            product.in_cart = True
        else:
            product.in_cart = False    
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            fra_epost = form.cleaned_data['fra_epost']
            navn = form.cleaned_data['navn']
            beskjed = form.cleaned_data['beskjed']
            try:
                send_mail(fra_epost, navn, beskjed, ['support@stellcare.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('/')

    context = {
    'products':products,
    'form':form,
    }

    return render(request, 'core/home.html', context)
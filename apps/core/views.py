from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from apps.cart.cart import Cart
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from apps.userprofile.forms import SignUpForm, UserprofileForm
from django.contrib.auth import login, authenticate




def hjemme(request,  backend='django.contrib.auth.backends.ModelBackend'):
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

    if request.POST.get('submit') == 'sign_up':
        form = SignUpForm(request.POST)
        userprofileform = UserprofileForm(request.POST)

        if form.is_valid() and userprofileform.is_valid():
            user = form.save()

            userprofile = userprofileform.save(commit=False)
            userprofile.user = user
            userprofile.save()

            login(request, user, backend='django.contrib.auth.backends.ModelBackend')

            return redirect('hjemme')
        else:
                form = SignUpForm()
                userprofileform = UserprofileForm()            
    
            


    context = {
    'products':products,
    'form':form,
    }

    return render(request, 'core/home.html', context)



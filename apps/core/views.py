import warnings

from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from django.core.mail import send_mail, BadHeaderError
from apps.userprofile.forms import SignUpForm, UserprofileForm
from django.contrib.auth import login, authenticate
from django.template.loader import render_to_string
from textwrap import dedent


from django.conf import settings
# Avoid shadowing the login() and logout() views below.
from django.contrib.auth import (
    REDIRECT_FIELD_NAME, get_user_model, login as auth_login,
    logout as auth_logout, update_session_auth_hash,
)



def hjemme(request,  backend='django.contrib.auth.backends.ModelBackend'):
    products = Product.objects.all()

    if request.method=='POST' and 'login' in request.POST:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            return redirect('/')

    if request.method=='POST' and 'signup' in request.POST:
        form = SignUpForm(request.POST)
        userprofileform = UserprofileForm(request.POST)

        if form.is_valid() and userprofileform.is_valid():
            user = form.save()

            userprofile = userprofileform.save(commit=False)
            userprofile.user = user
            userprofile.save()

            login(request, user, backend='django.contrib.auth.backends.ModelBackend')

            return redirect('/hjemme')
        else:
                form = SignUpForm()
                userprofileform = UserprofileForm()        

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
        return redirect('/email-success')

    context = {
    'products':products,
    }

    return render(request, 'core/home.html', context)

def about(request):
    return render(request, 'pages/about.html')

def email_success(request):
    return render(request, 'pages/email.html')

# KUNDESERVICE PAGES
def proccess(request):
    return render(request, 'pages/kundeservice/proccess.html')   
     
def forum(request):
    return render(request, 'pages/kundeservice/forum.html')

def edit(request):
    return render(request, 'pages/kundeservice/edit.html')   

def frontend(request):
    return render(request, 'pages/kundeservice/frontend.html')   


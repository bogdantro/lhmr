import warnings

from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from django.core.mail import send_mail, BadHeaderError
from apps.userprofile.forms import SignUpForm, UserprofileForm
from django.contrib.auth import login, authenticate
from django.template.loader import render_to_string


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

            return redirect('hjemme')
        else:
                form = SignUpForm()
                userprofileform = UserprofileForm()        

    if request.method=='POST' and 'contact' in request.POST:
        beskjed = request.POST.get('beskjed')
        fra_epost = request.POST.get('fra_epost')
        # send an email
        send_mail(
            fra_epost, #from email
            beskjed, #message
            settings.EMAIL_HOST_USER,
            ['sabertoothtri@gmail.com'], #to email
            fail_silently=False
        )
        return redirect('/email-success')

    context = {
    'products':products,
    }

    return render(request, 'core/home.html', context)

def hosting(request):
    return render(request, 'pages/hosting.html')

def about(request):
    return render(request, 'pages/about.html')

def email_success(request):
    return render(request, 'pages/email.html')

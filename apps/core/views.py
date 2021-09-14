import warnings

from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from apps.userprofile.forms import SignUpForm, UserprofileForm
from django.contrib.auth import login, authenticate

from django.conf import settings
# Avoid shadowing the login() and logout() views below.
from django.contrib.auth import (
    REDIRECT_FIELD_NAME, get_user_model, login as auth_login,
    logout as auth_logout, update_session_auth_hash,
)
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import (
    AuthenticationForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm,
)
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.http import HttpResponseRedirect, QueryDict
from django.shortcuts import resolve_url
from django.template.response import TemplateResponse
from django.utils.encoding import force_text
from django.utils.http import is_safe_url, urlsafe_base64_decode
from django.utils.translation import ugettext as _
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters




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
        fra_epost = request.POST.get['fra_epost']
        navn = request.POST.get['navn']
        beskjed = request.POST.get['beskjed']
        # send an email
        send_mail('Contact Form',
            navn, #subject
            beskjed, #message
            fra_epost, #from email
            settings.EMAIL_HOST_USER,
            ['sabertoothtri@gmail.com'], #to email
            fail_silently=False
        )

    context = {
    'products':products,
    }

    return render(request, 'core/home.html', context)


def hosting(request):
    return render(request, 'pages/hosting.html')

def about(request):
    return render(request, 'pages/about.html')
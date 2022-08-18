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
# Avoid shadowing the login() and logout() views below.
from django.contrib.auth import (
    REDIRECT_FIELD_NAME, get_user_model, login as auth_login,
    logout as auth_logout, update_session_auth_hash,
)



def hjemme(request,  backend='django.contrib.auth.backends.ModelBackend'):
    products = Product.objects.all()
    forum_post = Forum_post.objects.all()

    # if request.method=='POST' and 'login' in request.POST:
    #     username = request.POST['username']
    #     password = request.POST['password']
    #     user = authenticate(request, username=username, password=password)
    #     if user is not None:
    #         login(request, user)
    #         return redirect('/')
    #     else:
    #         return redirect('/')

    # if request.method=='POST' and 'signup' in request.POST:
    #     form = SignUpForm(request.POST)
    #     userprofileform = UserprofileForm(request.POST)

    #     if form.is_valid() and userprofileform.is_valid():
    #         user = form.save()

    #         userprofile = userprofileform.save(commit=False)
    #         userprofile.user = user
    #         userprofile.save()

    #         login(request, user, backend='django.contrib.auth.backends.ModelBackend')

    #         return redirect('/hjemme')
    #     else:
    #             form = SignUpForm()
    #             userprofileform = UserprofileForm()        


    context = {
    'products':products,
    }
    return render(request, 'core/home.html', context)

# Pages
    # About
        # About
def about(request):
    return render(request, 'pages/about/about.html')

        # Socials
def socials(request):
    return render(request, 'pages/about/socials.html')

        # Sectors
def sectors(request):
    return render(request, 'pages/about/sectors.html')

        # Our story
def our_story(request):
    return render(request, 'pages/about/our-story.html')

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

        # Process
def proccess(request):
    return render(request, 'pages/kundeservice/proccess.html')   

        # Forum
def forum(request):
    return render(request, 'pages/kundeservice/forum.html')

        # Forum add post
@login_required
def forum_add(request):   
    form = CreateInForum()
    if request.method == 'POST':
        form = CreateInForum(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/forum-innlegg-suksee')
    context ={'form':form}
    return render(request, 'pages/kundeservice/forum-add-post.html', context)     
        # Search for forum
def forum_post_detail(request, pk):
    forum_post = get_object_or_404(Forum_post, pk=pk)  

    context = {
        'forum_post': forum_post,
    }
    return render(request, 'pages/kundeservice/forum-post-detail.html', context)     

        # Forum reply to post
def forum_reply(request):
    form = CreateInDiscussion()
    if request.method == 'POST':
        form = CreateInDiscussion(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    context ={'form':form}
    return render(request,'pages/kundeservice/addInDiscussion.html',context)
        
@csrf_exempt
def forum_search_post(request):
    query = request.GET.get('q','')
    #The empty string handles an empty "request"
    if query:
            queryset = (Q(title__icontains=query))|(Q(text__icontains=query))
            #I assume "text" is a field in your model
            #i.e., text = model.TextField()
            #Use | if searching multiple fields, i.e., 
            #queryset = (Q(text__icontains=query))|(Q(other__icontains=query))
            results = Forum_post.objects.filter(queryset).distinct()
    else:
       results = []
    return render(request, 'pages/kundeservice/forum-search-results.html', {'results':results, 'query':query})

    #You can also set context = {'results':results, 'query':query} after 
    #the else: (same indentation as return statement), and 
    #use render(request, 'home.html', context) if you prefer. 

        # Refunds
def refunds(request):
    return render(request, 'pages/kundeservice/refunds.html')

    # Frontend
def frontend(request):
    return render(request, 'pages/kundeservice/frontend.html')   

    # Request edit
def request_edit(request):
    if request.method=='POST' and 'edit' in request.POST:
        order_id = request.POST.get('order_id')
        email = request.POST.get('email')

        data = {
            'order_id': order_id,
            'email': email,
        }
        message = dedent('''
        Fra: {}

        ---------------------------------
        Bestilling ID: {}
        ---------------------------------
        SJEKK BESTILLING ID I BACKEND

        ''').format(data['email'], data['order_id'] )
        send_mail('Spørr om endringer', message, '', ['sabertoothtri@gmail.com'])
        return redirect('/email-success')

    return render(request, 'pages/kundeservice/edit.html')

    # Our work
        # Our work
def our_work(request):
    return render(request, 'pages/our work/our-work.html')   

    # Emai
        # Contact email sucess
def contact_sucess(request):
    return render(request, 'pages/email/contact-sucess.html')

    # Prices
        # Hosting
def hosting(request):
    return render(request, 'pages/prices/hosting/hosting.html')

        # Extra page
def extra_page(request):
    return render(request, 'pages/prices/extra page/extra-page.html')

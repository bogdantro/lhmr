from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def myaccount(request):
    return render(request, 'core/myaccount.html')

def login(request):
    return render(request, 'core/login.html')    

def signup(request):
    return render(request, 'core/signup.html')    
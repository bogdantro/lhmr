from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from .forms import Order
from django.template import RequestContext
from base64 import b64encode


def send_order(request):
    if request.method == 'POST' and 'order' in request.POST:
        form = Order(request.POST, request.FILES)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            products = form.cleaned_data['products']
            hosting = form.cleaned_data['hosting']
            image = form.cleaned_data['image']
            color = form.cleaned_data['color']
            form.save()
            return redirect('/bestilling-utfort:1-2-3-4')
    else:
        form = Order()

    return render(request, 'core/order.html', {'form': form})

def order_success(request):
    return render(request, 'core/success.html')    

from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.store.models import Product
from .forms import Order
from django.template import RequestContext


def send_order(request):
    if request.method == 'POST':
        form = Order(request.POST)
        if form.is_valid():
            form.save()
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['first_name']
            email = form.cleaned_data['first_name']
            message = form.cleaned_data['message']
            products = form.cleaned_data['products']
            hosting = form.cleaned_data['hosting']
            image = form.cleaned_data['image']
            form = Order()
            return redirect('/bestilling-utfort:1-2-3-4')
    else:
        form = Order()

    return render(request, 'core/order.html', {'form': form})

def success(request):
    return render(request, 'core/success.html')    

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .forms import SignUpForm, UserprofileForm
from django.contrib.auth import login
from apps.order.models import Order


@login_required
def myaccount(request):
    orderFinished = Order.objects.filter(user=request.user, is_finished=True).first()
    orderConfirmed = Order.objects.filter(user=request.user, is_confirmed=True).first()

    context = {
        'orderFinished':orderFinished,
        'orderConfirmed':orderConfirmed,
     }

    return render(request, 'core/myaccount.html', context)

@login_required
def orderinfo(request, id):
    order = get_object_or_404(Order, id=id) 

    context = {
        'order':order,
     }

    return render(request, 'core/orderinfo.html', context)


def signup(request, backend='django.contrib.auth.backends.ModelBackend'):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        userprofileform = UserprofileForm(request.POST)

        if form.is_valid() and userprofileform.is_valid():
            user = form.save()

            userprofile = userprofileform.save(commit=False)
            userprofile.user = user
            userprofile.save()

            login(request, user)

            return redirect('hjemme')
    else:
        form = SignUpForm()
        userprofileform = UserprofileForm()

    return render(request, 'core/signup.html', {'form': form, 'userprofileform': userprofileform})    
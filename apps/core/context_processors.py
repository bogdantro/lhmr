from apps.store.models import *

def nav_category(request):
    nav_category = Category.objects.all()

    context = {
    'nav_category':nav_category,
    }

    return context
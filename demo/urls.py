from django.contrib import admin
from django.urls import path, include
from apps.core.views import hjemme
from apps.store.views import product_detail
from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views
from apps.cart.views import cart_detail
from apps.userprofile.views import myaccount
from apps.store.api import api_add_to_cart, api_remove_from_cart, create_checkout_session




urlpatterns = [
    path('webiser-admin/', admin.site.urls),

    #PAGES
    path('', hjemme, name="hjemme"),

    #STORE
    path('produkt/:<slug>/', product_detail, name='product_detail'),
    path('handlekurv/', cart_detail, name='cart-detail'),

    #API
    path('api/add_to_cart/', api_add_to_cart, name='api_add_to_cart'),
    path('api/create_checkout_session/', create_checkout_session, name='create_checkout_session'),
    path('api/remove_from_cart/', api_remove_from_cart, name='api_remove_from_cart'),


    #AUTH
    path('logg-ut/', views.LogoutView.as_view(), name='logout'),
    path('min-bruker/', myaccount, name='myaccount'),

]

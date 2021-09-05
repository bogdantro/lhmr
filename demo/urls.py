from django.contrib import admin
from django.urls import path, include
from apps.core.views import hjemme, hosting
from apps.store.views import product_detail
from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views
from apps.userprofile.views import myaccount
from apps.order.views import send_order, success




urlpatterns = [
    path('webiser-admin/', admin.site.urls),

    #PAGES
    path('', hjemme, name="hjemme"),

    #STORE
    path('produkt/:<slug>/', product_detail, name='product_detail'),
    path('bestill/', send_order, name='send-order'),
    path('bestilling-utført/', success, name='success'),
    path('hosting-informasjon/', hosting, name='hosting'),

    #AUTH
    path('logg-ut/', views.LogoutView.as_view(), name='logout'),
    path('min-bruker/', myaccount, name='myaccount'),

]

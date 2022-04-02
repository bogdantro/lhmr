from django.contrib import admin
from django.urls import path, include
from apps.core.views import hjemme, about, email_success, proccess, forum, edit, frontend, contact, request_edit
from apps.store.views import product_detail
from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views
from apps.userprofile.views import myaccount, signup, orderinfo
from apps.order.views import send_order, order_success
from apps.newsletter.api import api_add_subscriber




urlpatterns = [
    path('webiser-admin/', admin.site.urls),

    #PAGES
    path('', hjemme, name="hjemme"),
    # OM OSS PAGES
        path('om-webiser/', about, name='about'),
    # KUNDESERVICE PAGES
        path('prossesen-av-bestillinger/', proccess, name='proccess'),
        path('webiser-forum/', forum, name='forum'),
        path('sds/', edit, name='edit'),
        path('de-tre-frontend-spraakene/', frontend, name='frontend'),
        path('kontakter-oss/', contact, name='contact'),

    #STORE
    path('produkt/:<slug>/', product_detail, name='product_detail'),
    path('bestill/', send_order, name='send-order'),
    path('bestilling-utfort/webiser/bestilling/', order_success, name='order_success'),
    path('email-success/', email_success, name='email_success'),
    path('sporr-om-endringer/', request_edit, name='request_edit'),


    #AUTH
    path('logg-inn/', views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('lag-bruker/', signup, name='signup'),
    path('logg-ut/', views.LogoutView.as_view(), name='logout'),
    path('min-bruker/', myaccount, name='myaccount'),
    path('bestilling-info/<int:id>/', orderinfo, name='orderinfo'),

    # API
    path('api/add_subscriber/', api_add_subscriber, name='api_add_subscriber'),

]

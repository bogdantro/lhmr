from django.contrib import admin
from django.urls import path, include
from apps.core.views import *
from apps.blog.views import *
from apps.store.views import *
from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views
from apps.userprofile.views import *
from apps.order.views import *
from apps.newsletter.api import api_add_subscriber


urlpatterns = [
    path('webiser-admin/', admin.site.urls),

    # Pages
    path('', hjemme, name="hjemme"),
    # Om oss
        path('om-webiser/', about, name='about'),
        path('sosiale-medier/', socials, name='socials'),
        path('sektorer/', sectors, name='sectors'),
        path('vår-historie/', our_story, name='our_story'),
    # Kundeservice 
        path('prosessen-av-bestillinger/', proccess, name='proccess'),
        path('webiser-forum/', forum, name='forum'),
        path('progammering-spraakene/', frontend, name='frontend'),
        path('kontakter-oss/', contact, name='contact'),
    # Our work
        path('vårt-arbeid/', our_work, name='our_work'),
    # Prices 
        path('ekstra---hosting/', hosting, name='hosting'),
        path('ekstra---ekstra-sider/', extra_page, name='extra_page'),

    # Store
    path('produkt/:<slug>/', product_detail, name='product_detail'),
    path('bestill/', send_order, name='send-order'),
    path('bestilling-utfort/webiser/bestilling/', order_success, name='order_success'),
    path('email-success/', email_success, name='email_success'),
    path('sporr-om-endringer/', request_edit, name='request_edit'),
    path('blogg/', blog, name='blog'),
    path('blog_post/<int:id>/', blog_post, name='blog_post'),


    # Auth
    path('logg-inn/', views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('lag-bruker/', signup, name='signup'),
    path('logg-ut/', views.LogoutView.as_view(), name='logout'),
    path('min-bruker/', myaccount, name='myaccount'),
    path('bestilling-info/<int:id>/', orderinfo, name='orderinfo'),

    # API
    path('api/add_subscriber/', api_add_subscriber, name='api_add_subscriber'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

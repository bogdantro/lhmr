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
from apps.newsletter.api import api_add_subscriber
from django.views.generic.base import RedirectView

favicon_view = RedirectView.as_view(url='/favicon.ico', permanent=True)

urlpatterns = [
    path('lillehammertjenester/admin/login/', admin.site.urls),

    # Pages
    path('', hjemme, name="hjemme"),
    # Om oss
    path('om-oss/', about, name='about'),
    path('alle-tjenester/', allProducts, name='allProducts'),
    path('blogg/', blog, name='blog'),
    path('blog_post/<int:id>/', blog_post, name='blog_post'),
    path('for-bedrifter/', business, name='business'),
    path('for-bedrifter/bli-partner/', be_partner, name='be_partner'),
    path('for-bedrifter/bli-partner/partner-sukess', partner_success, name='partner_success'),
    path('asklfholafio3o/iskf393SFJjSFF39rWFj/KSsdk992999SDSSDKSDkadk30W/', make_serv, name='make_serv'),

    path('søke-resultater/', home_page_search, name='home_page_search'),

    path('produkt/:<slug>/', product_detail, name='product_detail'),
    path('kategori/:<slug>/', category_detail, name='category_detail'),

    # Legal
    path('vilkaar/', vilkår, name='vilkår'),
    path('policy/', policy, name='policy'),


    # Auth
    path('logg-inn/', views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('lag-bruker/', signup, name='signup'),
    path('logg-ut/', views.LogoutView.as_view(), name='logout'),
    path('min-bruker/', myaccount, name='myaccount'),
    path('bestilling-info/<int:id>/', orderinfo, name='orderinfo'),

    # API
    path('api/add_subscriber/', api_add_subscriber, name='api_add_subscriber'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

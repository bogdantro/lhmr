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


urlpatterns = [
    path('admin/', admin.site.urls),

    # Pages
    path('', hjemme, name="hjemme"),
    # Om oss
        path('om-webiser/', about, name='about'),
    path('blogg/', blog, name='blog'),
    path('blog_post/<int:id>/', blog_post, name='blog_post'),

    path('søke-resultater/', home_page_search, name='home_page_search'),

    path('produkt/:<slug>/', product_detail, name='product_detail'),


    # Auth
    path('logg-inn/', views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('lag-bruker/', signup, name='signup'),
    path('logg-ut/', views.LogoutView.as_view(), name='logout'),
    path('min-bruker/', myaccount, name='myaccount'),
    path('bestilling-info/<int:id>/', orderinfo, name='orderinfo'),

    # API
    path('api/add_subscriber/', api_add_subscriber, name='api_add_subscriber'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Forum_post)
admin.site.register(Comment)

class PartnersAdmin(admin.ModelAdmin):
    list_display = ['name', 'contact_person', 'email', 'org_nr', 'is_pro']
    search_fields = ('name', 'contact_person', 'email', 'org_nr')
    list_filter = ('is_pro',)

admin.site.register(Partners, PartnersAdmin)


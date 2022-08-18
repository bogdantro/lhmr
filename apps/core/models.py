from django.db import models
from datetime import date
from django.forms import ModelForm
from django.utils.text import slugify
from django.dispatch import receiver
from django.db.models import signals
from django.contrib.auth import get_user_model

# Create your models here.

class Forum_post(models.Model):
    title = models.CharField(max_length=150)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=70)
    complete = models.BooleanField(default=False)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Discussion(models.Model):
    forum = models.ForeignKey(Forum_post,blank=True,on_delete=models.CASCADE)
    discuss = models.CharField(max_length=1500)
 
    def __str__(self):
        return str(self.forum)    

from tkinter import CASCADE
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

class Comment(models.Model):
    post = models.ForeignKey(Forum_post, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    email = models.EmailField(max_length=200, blank=True)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # manually deactivate inappropriate comments from admin site
    active = models.BooleanField(default=True)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='replies', on_delete=models.CASCADE)

    class Meta:
        # sort comments in chronological order by default
        ordering = ('created',)

    def __str__(self):
        return 'Comment by {}'.format(self.name)

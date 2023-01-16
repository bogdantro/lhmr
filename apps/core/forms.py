from django.forms import ModelForm
from .models import *
from django import forms

class CreateInForum(ModelForm):
    class Meta:
        model= Forum_post
        fields = "__all__"        

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('name', 'email', 'body')
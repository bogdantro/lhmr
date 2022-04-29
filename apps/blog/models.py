from django.db import models
from datetime import date

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=300)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="blog")
    author = models.CharField(max_length=70)

    def __str__(self):
        return self.title
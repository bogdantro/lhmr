from django.shortcuts import render, get_object_or_404
from .models import Blog

def blog(request):
    post = Blog.objects.all()

    return render(request, 'core/blog.html', {'post': post})

def blog_post(request, id):
    post_info = get_object_or_404(Blog, id=id) 
     
    return render(request, 'core/blog-post.html', {'post_info':post_info})

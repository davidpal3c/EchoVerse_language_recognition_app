from django.shortcuts import render
from django.http import HttpResponse


def index_view(request):
    return render(request, 'core/index.html')


def about_view(request):
    return render(request, 'core/about.html')


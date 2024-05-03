from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'core/index.html')

<<<<<<< HEAD
=======
def login(request):
    return render(request, 'userauths/sign-in.html')
>>>>>>> 31840c21ff1ad37e4c2707d1300e7b33751718d3

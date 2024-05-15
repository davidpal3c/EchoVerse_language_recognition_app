from django.shortcuts import render, redirect
from django.contrib import messages
# from .forms import RPaymentForm

# Create your views here.
def donate_gateway(request):
    return render(request, 'payment/donate.html')

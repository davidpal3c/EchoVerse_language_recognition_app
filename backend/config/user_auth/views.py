from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.urls import reverse_lazy
from .forms import RegisterForm

from django.contrib.messages import get_messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
import json

from .models import User


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


def login_user(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, (f"Welcome! {email} \nYou have successfully logged in."))
            return JsonResponse({'redirect': 'home'})
        else:
            messages.error(request, ("Error Logging In. Please Try Again..."))
            return JsonResponse({'error': 'Error Logging In. Please Try Again...'}, status=400)
    return render(request, 'userauths/login.html')

def register_user(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f"Welcome {user.email}!")
            return JsonResponse({'redirect': 'home'})
        else:
            messages.error(request, "Registration failed. Please try again.")
            return JsonResponse({'error': 'Registration failed. Please try again.'}, status=400)
    else:
        form = RegisterForm()
    return render(request, 'userauths/register.html', {'form': form})

# @csrf_exempt
# def ajax_auth(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         action = data.get('action')
#         email = data.get('email')
#         password = data.get('password')

#         if action == 'login':
#             user = authenticate(request, email=email, password=password)
#             if user is not None:
#                 login(request, user)
#                 return JsonResponse({'status': 'success', 'message': 'Logged in'})
#             else:
#                 return JsonResponse({'status': 'error', 'message': 'Invalid credentials'})

#         elif action == 'register':
#             form = RegisterForm(data)
#             if form.is_valid():
#                 user = form.save()
#                 login(request, user)
#                 return JsonResponse({'status': 'success', 'message': 'Registered and logged in'})
#             else:
#                 errors = form.errors.as_json()
#                 return JsonResponse({'status': 'error', 'errors': errors})

#     return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)



# def login_user(request):
#     if request.method == "POST":
#         email = request.POST["email"]
#         password = request.POST["password"]
#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             login(request, user)
#             messages.success(request, (f"Welcome! {email} \nYou have successfully logged in."))
#             return redirect('home')
           
#         else:
#             messages.error(request, ("Error Logging In. Please Try Again..."))
#             return redirect('user_auth:login')

#     else:
#         return render(request, 'userauths/login.html')


def logout_user(request):
    logout(request)
    messages.success(request, ("You Were Logged Out."))
    return redirect('home')


# def register_user(request):
#     if request.method == "POST":
#         form = RegisterForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             messages.success(request, f"Welcome {user.email}!")
#             return redirect(reverse_lazy('home'))
#         else:
#             messages.error(request, "Registration failed. Please try again.")
#     else:
#         form = RegisterForm()
#     return render(request, 'userauths/register.html', {'form': form})



# class RegisterView(CreateView):
#     form_class = RegisterForm
#     template_name = 'userauths/register.html'
#     success_url = '/'
#     success_url = reverse_lazy('home')


#     def form_valid(self, form):
#         password = form.cleaned_data['password']
#         password_2 = form.cleaned_data['password_2']
        
#         if password != password_2:
#             messages.success(self.request, "The passwords do not match. Please try again.")
#             # form.add_error(None, "The passwords do not match. Please try again.")
#             return self.form_invalid(form)

#         response = super().form_valid(form)
#         user = form.save()
#         login(self.request, user)
#         messages.success(self.request, f"Welcome {user.email}!")
#         return response


#     def form_invalid(self, form):
#         # messages.success(self.request, "The password do not match. Please try again.")
#         return super().form_invalid(form)




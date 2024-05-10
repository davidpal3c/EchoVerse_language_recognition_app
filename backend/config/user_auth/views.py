from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import RegistrationForm

# from django.contrib.auth.forms import UserCreationForm


def login_user(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, ("Welcome! You have successfully logged in."))
            return redirect('home')
           
        else:
            messages.error(request, ("Error Logging In. Please Try Again..."))
            return redirect('user_auth:login')

    else:
        return render(request, 'userauths/login.html')



def logout_user(request):
    logout(request)
    messages.success(request, ("You Were Logged Out."))
    return redirect('home')



def register_user(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():

            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()

            login(request, user)
            messages.success(request, ("Registration Successful!"))
            
            return redirect('home')
        
    else:  
        form = RegistrationForm()


    return render(request, 'userauths/register.html', {
        'form':form,
    })




# def register_user(request):
#     if request.method == "POST":
#         form = UserCreationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             email = form.cleaned_data['email']
#             password = form.cleaned_data['password1']
#             user = authenticate(email=email, password=password)
#             login(request, user)
#             messages.success(request, ("Registration Successful!"))
            
#             return redirect('home')
        
#     else:  
#         form = UserCreationForm()


#     return render(request, 'userauths/register.html', {
#         'form':form,
#     })


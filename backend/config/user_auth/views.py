from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# Create your views here.
def user_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('core/index.html')
        else:
            messages.error(request, 'Invalid username or password.')

    return render(request, 'userauths/login.html')


def user_logout(request):
    logout(request)
    return redirect('userauths/login.html')









# def userProfile(request):
#     # get currently logged-in user
#     current_user = request.user

#     return render(request, 'userauths/user_profile.html', {'user': current_user})


# def userRegister(request):

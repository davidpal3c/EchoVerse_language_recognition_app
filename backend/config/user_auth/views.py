from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


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




# def user_login(request):
#     if request.method == 'POST':
#         email = request.POST.get('email')
#         password = request.POST.get('password')
#         user = authenticate(request, email=email, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('core/index.html')
#         else:
#             messages.error(request, 'Invalid username or password.')

#     return render(request, 'userauths/login.html')


# def user_logout(request):
#     logout(request)
#     return redirect('userauths/login.html')









# def userProfile(request):
#     # get currently logged-in user
#     current_user = request.user

#     return render(request, 'userauths/user_profile.html', {'user': current_user})


# def userRegister(request):

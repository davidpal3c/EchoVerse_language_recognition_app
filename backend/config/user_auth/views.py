from django.shortcuts import render


# Create your views here.
def loginView(request):
    return render(request, 'userauths/login.html')


# def userProfile(request):
#     # get currently logged-in user
#     current_user = request.user

#     return render(request, 'userauths/user_profile.html', {'user': current_user})


# def userRegister(request):

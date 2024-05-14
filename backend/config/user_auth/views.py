from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import RegisterForm, LoginForm
from django.views.generic import CreateView, FormView


from .models import User


# from django.contrib.auth.forms import UserCreationForm


def login_user(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, (f"Welcome! {email} \nYou have successfully logged in."))
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


 
class RegisterView(CreateView):
    form_class = RegisterForm
    template_name = 'userauths/register.html'
    success_url = '/'

    def form_valid(self, form):
        response = super().form_valid(form)
        user = form.save()
        login(self.request, user)
        messages.success(self.request, f"Welcome {user.email}!")
        return response

    def form_invalid(self, form):
        # messages.success(self.request, "The password do not match. Please try again.")
        return super().form_invalid(form)

# # ORIGINAL
# def register_user(request):
#     form = RegisterForm(request.POST or None)
#     context = {"form": form}

#     if form.is_valid():
#         form.save()

#     return render(request, 'userauths/register.html', context)

#     if request.method == "POST":
#         form = RegistrationForm(request.POST)
#         if form.is_valid():
#             user = form.save(commit=False)
#             user.set_password(form.cleaned_data['password'])
#             user.save()

#             login(request, user)
#             messages.success(request, ("Registration Successful!"))
#             return redirect('home')
        
#     else:  
#         form = RegistrationForm()

#     return render(request, 'userauths/register.html', {
#         'form':form,
#     })




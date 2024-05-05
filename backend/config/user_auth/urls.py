from django.urls import path
from . import views

app_name = "user_auth"

urlpatterns = [
    path("login", views.loginView, name="login"),
    # path("sign-up", views.registerView, name="sign-up")
    # path("user-profile", views.userProfile, name="user-in")
]



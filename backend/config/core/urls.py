from django.urls import path
from . import views

# app_name = "core"

urlpatterns = [
<<<<<<< HEAD
    path("", views.index, name="home"),
=======
    path("", views.index, name="index"),
    path("login", views.login, name="login")
>>>>>>> 31840c21ff1ad37e4c2707d1300e7b33751718d3
]

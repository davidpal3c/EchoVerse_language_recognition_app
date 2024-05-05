from django.urls import path
from . import views

# app_name = "core"

urlpatterns = [
    path("", views.index_view, name="home"),
    path("about/", views.about_view, name="about")
]

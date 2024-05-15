from django.urls import path
from . import views

app_name = "payment"

urlpatterns = [
    path("donate", views.donate_gateway, name="donate"),
]
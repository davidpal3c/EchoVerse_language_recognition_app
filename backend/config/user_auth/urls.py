from django.urls import path
from . import views
from django.contrib import admin

app_name = "user_auth"

urlpatterns = [
    path("login", views.login_user, name="login"),
    path("logout", views.logout_user, name="logout"),
    path("register", views.register_user, name="register_user"),
    # path("sign-up", views.registerView, name="sign-up")
    # path("user-profile", views.userProfile, name="user-in")
]


admin.site.index_title = 'Management Dashboard'
admin.site.site_header = 'Echoverse Admin'
admin.site.site_title = 'Mgmt App'
from django.db import models
from django.contrib.auth.models import AbstractUser     # later add
from django.contrib.auth.validators import UnicodeUsernameValidator     # later add

from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from django.utils import timezone


class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Provide a valid e-mail address")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user 

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)
    

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(blank=True, default='', unique=True)
    name = models.CharField(max_length=255, blank=True, default='')

    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(blank=True, null=True)

    objects = CustomUserManager() #points to UserManager created
                            # and when using user.objects.all() to get all of the users, 
                            # it would use this class (CustomUserManager) instead of the built-in one in django

    USERNAME_FIELD = 'email'          # specifies which field the username is
    EMAIL_FIELD = 'email'             # specifies which field is the email field
    REQUIRED_FIELDS = []               # sets which fields would be required


    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    
    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name or self.email.split('@')[0]        # ..or user first value [0] as short name
        


from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.validators import UnicodeUsernameValidator


# class CustomUser(AbstractUser):
#     username = models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[UnicodeUsernameValidator()], verbose_name='username')
#     email = models.EmailField(_('email address'), unique=True)
#     # username = models.CharField(max_length=100)
#     bio = models.TextField(_('bio'), blank=True)
#     birth_date = models.DateField(_('birth date'), null=True, blank=True)
#     is_active = models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []

#     def __str__(self):
#         return self.email
    





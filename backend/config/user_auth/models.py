from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone

# from django.contrib.auth.decorators import login_required   # later add 
# from django.contrib.auth.models import AbstractUser     # later add
# from django.contrib.auth.validators import UnicodeUsernameValidator     # later add


class UserManager(BaseUserManager):
    def create_user(self, email, full_name=None, password=None, is_active=True, is_staff=False, is_admin=False):         
    # takes in REQUIRED_FIELDS + extra attributes to define object
        if not email:
            raise ValueError("Users must have an email address")
        elif not password:
            raise ValueError("Users must have a password")
        # elif not full_name:
        #     raise ValueError("Users must have a full name")   


        user_obj = self.model(
            email = self.normalize_email(email),
            full_name = full_name
        )

        user_obj.set_password(password)
        user_obj.active = is_active
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.save(using=self._db)
        return user_obj
    
    def create_staffUser(self, email, full_name=None, password=None):
        user_obj = self.create_user(
            email,
            full_name,
            password=password,
            is_active=True,
            is_staff=True,
            is_admin=False
        )
        return user_obj

    def create_superuser(self, email, full_name=None, password=None):
        user_obj = self.create_user(
            email,
            full_name,
            password=password,
            is_active=True,
            is_staff=True,
            is_admin=True
        )
        return user_obj



class User(AbstractBaseUser):
    email           = models.EmailField(max_length=255, unique=True)
    full_name       = models.CharField(max_length=255, blank=True, null=True)
    active          = models.BooleanField(default=True)   # can login
    staff           = models.BooleanField(default=False)
    admin           = models.BooleanField(default=False)
    timestamp       = models.DateTimeField(auto_now=True)
    is_active       = models.BooleanField(default=True)    
 
    # confirm_email      = models.BooleanField(default=False)
    # confirmed_date     = models.DateTimeField(default=False)


    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = []           # 'full_name' , first / last, employe ID, etc..
                               # email and password are set required by default    
                                # would be called when 'createsuperuser' is run: 

    objects = UserManager()


    def __str__(self):
        return self.email

    def get_full_name(self):
        if self.full_name:
            return self.full_name
        return self.email
    
    def get_short_name(self):
        return self.email           # can be other declared attribute (ie. name, etc)
    

    def has_perm(self, perm, obj=None):
        return True
    

    def has_module_perms(self, app_label):
        return True


    @property
    def is_staff(self):
        return self.staff
    
    @property
    def is_admin(self):
        return self.admin

    @property
    def is_active(self):
        return self.active
    


# class Profile(models.Model):
#     user    = models.OneToOneField(User)
    # extend (could be in a different app too, to handle extra user data)
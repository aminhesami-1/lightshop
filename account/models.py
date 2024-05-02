from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    phone = models.CharField(max_length=13)
    email_active_code = models.CharField(max_length=120)
    user_address = models.CharField(max_length=300, null=False)
    user_profile=models.ImageField(null=True,blank=True,upload_to='account')
    id_number =models.CharField(max_length=300, null=False)
    cart_number = models.CharField(max_length=300, null=False)


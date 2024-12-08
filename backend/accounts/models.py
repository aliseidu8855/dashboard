from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class UserRecord(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # Example of an extra field
    
    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_groups",
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions",
        blank=True,
    )
    def __str__(self):
        return self.username

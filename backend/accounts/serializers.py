from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import UserRecord

class UserRecordSerializer(serializers.ModelSerializer):
    """
    Serializer for the UserRecord model.

    This serializer handles the conversion of UserRecord instances to and from JSON format.
    It includes fields for 'id', 'username', 'email', 'password', 'first_name', and 'last_name'.
    The 'password' field is write-only and will be hashed before saving the user.

    Attributes:
        password (serializers.CharField): Write-only field for the user's password.

    Methods:
        create(validated_data):
            Hashes the password before saving the user instance.
    """
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserRecord
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)



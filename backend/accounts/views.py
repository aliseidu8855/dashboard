from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserRecord
from .serializers import UserRecordSerializer

class RegisterView(APIView):
    """
    RegisterView handles user registration by processing POST requests.
    It validates the incoming user data using UserRecordSerializer and creates a new user record upon successful validation.
    Returns:
        Response: Returns the serialized user data with HTTP 201 Created status if successful,
                  or returns serializer errors with HTTP 400 Bad Request status if validation fails.
    """
    def post(self, request):
        serializer = UserRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.generics import UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from apps.accounts.api.serializers.auth_serializers import (
    ChangePasswordSerializer, MyTokenObtainPairSerializer, UserAuthSerializer)
from apps.accounts.services.generate_token import create_jwt_pair_for_user


class UserLoginView(APIView):
    def post(self, request: Request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if user is not None:
            return Response(
                data={
                    "user_id": str(user.id),
                    "tokens": create_jwt_pair_for_user(user=user),
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                data={
                    "message": "Invalid email or password combination",
                    "status": status.HTTP_401_UNAUTHORIZED,
                },
            )


class UserRegistrationView(APIView):
    def post(self, request):
        data = {
            "username": request.data.get("username"),
            "email": request.data.get("email"),
            "password1": request.data.get("password_1"),
            "password2": request.data.get("password_2"),
            "type": request.data.get("type"),
        }

        serializer = UserAuthSerializer(data=data)

        if serializer.is_valid():
            user = serializer.save()

            return Response(
                data={
                    "user_id": str(user.id),
                    "tokens": create_jwt_pair_for_user(user=user),
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            data={"message": serializer.errors, "status": status.HTTP_400_BAD_REQUEST},
            status=status.HTTP_400_BAD_REQUEST,
        )


class ChangePasswordView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        serializer = ChangePasswordSerializer(
            data=request.data, context={"request": request}
        )

        if serializer.is_valid():
            user.set_password(serializer.validated_data["new_password"])
            user.save()
            return Response(
                {"message": "password updated", "status": status.HTTP_200_OK},
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class DeleteUserView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        user = request.user
        user.delete()
        return Response(
            {"message": "User successfully deleted."}, status=status.HTTP_200_OK
        )

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers
from rest_framework.serializers import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from apps.accounts.repositories.user_repository import UserRepository

User = get_user_model()


class UserAuthSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(max_length=128, write_only=True, required=True)
    password2 = serializers.CharField(max_length=128, write_only=True, required=True)

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2", "type"]

    def validate_email(self, value):
        if UserRepository.user_exists_by_email(value):
            raise serializers.ValidationError("This email is already in use.")
        return value

    def validate_username(self, value):
        if UserRepository.user_exists_by_username(value):
            raise serializers.ValidationError("This username is already in use.")
        return value

    def validate_type(self, value):
        if value not in ["assistants", "recipients"]:
            raise serializers.ValidationError("Type must be assistants or recipients.")
        return value

    def validate(self, data):
        if data["password1"] != data["password2"]:
            raise serializers.ValidationError(
                {"password2": "Password fields didn't match."}
            )

        data["password"] = data["password1"]
        return data

    def create(self, validated_data):
        # Remove password1 and password2 before creating the user
        validated_data.pop("password1", None)
        validated_data.pop("password2", None)

        return UserRepository.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            type=validated_data["type"],
        )


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_old_password(self, value):
        user = self.context["request"].user

        if not user.check_password(value):
            raise serializers.ValidationError("The old password is incorrect.")
        return value

    def validate_new_password(self, value):
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError(list(e.messages))
        return value

    def update(self, instance, validated_data):
        UserRepository.change_user_password(instance, validated_data["new_password"])
        return instance


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["username"] = user.username

        return token

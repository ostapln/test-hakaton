from rest_framework import serializers

from apps.accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username", "about_me", "type", "date_added", "photo"]

    def get_photo(self, obj):
        if obj.photo and hasattr(obj.photo, "url"):
            request = self.context.get("request")
            photo_url = obj.photo.url
            return request.build_absolute_uri(
                photo_url
            )  # Build full URL using the request object
        return None

from rest_framework import serializers

from apps.posts.models import Posts


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        exclude = [
            "user",
        ]

    def get_photo(self, obj):
        if obj.photo and hasattr(obj.photo, "url"):
            request = self.context.get("request")
            photo_url = obj.photo.url
            return request.build_absolute_uri(
                photo_url
            )  # Build full URL using the request object
        return None

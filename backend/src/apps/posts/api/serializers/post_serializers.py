from rest_framework import serializers
from apps.posts.models import Posts

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        exclude = ['user', ]
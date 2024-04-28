from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import (IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.posts.api.serializers.post_serializers import PostsSerializer
from apps.posts.models import Posts
from apps.posts.permissions import PostExists
from apps.posts.repositories.post_repository import PostRepository
from core.permissions import IsOwner


class PostsListView(APIView):
    def get(self, request):
        posts = PostRepository.get_all_posts()

        serializer = PostsSerializer(posts, many=True)

        data = {"posts": serializer.data}

        return Response(data, status=status.HTTP_200_OK)


class UserPostsListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        posts = PostRepository.get_posts_by_user(user=request.user)

        serializer = PostsSerializer(posts, many=True)

        data = {"posts": serializer.data}

        return Response(data, status=status.HTTP_200_OK)


class CreatePostView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        post = PostsSerializer(data=request.data)
        if post.is_valid():
            post.validated_data["user"] = request.user
            post.save()

            return Response(post.data, status=status.HTTP_201_CREATED)
        else:
            return Response(post.errors, status=status.HTTP_400_BAD_REQUEST)


class PostDetailView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, pk):
        post = get_object_or_404(Posts, pk=pk)

        if post.user != request.user:
            return Response(
                {"detail": "You do not have permission to view this post."},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = PostsSerializer(post)

        return Response(serializer.data, status=status.HTTP_200_OK)


class SearchPostsView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        query = request.query_params.get("search", "")
        posts = PostRepository.search_posts(query)

        serializer = PostsSerializer(posts, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class DeletePostView(APIView):
    permission_classes = [IsAuthenticated, IsOwner]

    def delete(self, request, pk, format=None):
        post = get_object_or_404(Posts, pk=pk, user=request.user)
        post.delete()
        return Response(status=status.HTTP_200_OK)


class UpdatePostView(APIView):
    permission_classes = [IsAuthenticated, PostExists, IsOwner]

    def patch(self, request, pk):
        post = get_object_or_404(Posts, pk=pk)

        self.check_object_permissions(request, post)
        serializer = PostsSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

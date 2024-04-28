from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import BasePermission

from apps.posts.models import Posts
from apps.posts.repositories.post_repository import PostRepository


class PostExists(BasePermission):
    """
    Allows access only if the post exists.
    """

    def has_permission(self, request, view):
        pk = view.kwargs.get("pk")
        if PostRepository.post_exists_by_pk(pk=pk):
            return True
        else:
            raise PermissionDenied("This post doesn't exist")

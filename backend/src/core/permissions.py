from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    """
    Allows access only to the owner of the object.
    """

    def has_object_permission(self, request, view, obj):
        if obj.user == request.user:
            return True
        else:
            raise PermissionDenied("This object wasn't created by this user")

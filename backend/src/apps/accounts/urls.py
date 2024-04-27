from django.conf.urls.static import static
from django.urls import include, path
from accounts.api.views import auth_views, self_views
from rest_framework.routers import DefaultRouter
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
)
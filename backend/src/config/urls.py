from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Helmee API",
        default_version="v1",
        description="Documentation for helmee API",
        contact=openapi.Contact(email="contact.yuriidorosh@gmail.com"),
        license=openapi.License(name="MIT"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


API_PATH = "api/v1"

urlpatterns = [
    path("admin/", admin.site.urls),
    path(f"{API_PATH}/users/", include("apps.accounts.urls")),
    path(f"{API_PATH}/posts/", include("apps.posts.urls")),
    path(
        f"{API_PATH}/swagger<format>/",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        f"{API_PATH}/swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        f"{API_PATH}/redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="schema-redoc",
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

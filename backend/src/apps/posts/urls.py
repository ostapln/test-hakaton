from django.urls import path
from rest_framework.routers import DefaultRouter

from apps.posts.api.views import post_views

urlpatterns = [
    path("create/", post_views.CreatePostView.as_view(), name="create-post"),
    path("all/", post_views.PostsListView.as_view(), name="posts-list"),
    path(
        "all-user-posts/",
        post_views.UserPostsListView.as_view(),
        name="user-posts-list",
    ),
    path("<int:pk>/", post_views.PostDetailView.as_view(), name="post-detail"),
    path("search/", post_views.SearchPostsView.as_view(), name="search-posts"),
    path("delete/<int:pk>/", post_views.DeletePostView.as_view(), name="delete-post"),
    path("update/<int:pk>/", post_views.UpdatePostView.as_view(), name="update-post"),
]

router = DefaultRouter()

urlpatterns += router.urls

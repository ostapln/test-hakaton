from django.contrib import admin

from apps.posts.models import Posts


@admin.register(Posts)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "user_id", "date_added")
    list_filter = ("id", "user_id", "title")
    search_fields = ("title", "user_id")

from apps.posts.models import Posts

class PostRepository:
    @staticmethod
    def get_posts_by_user(user):
        return Posts.objects.filter(user=user)

    @staticmethod
    def get_all_posts():
        return Posts.objects.all()

    @staticmethod
    def post_exists_by_pk(pk):
        return Posts.objects.filter(pk=pk).exists()

 
from apps.accounts.models import User


class UserRepository:
    @staticmethod
    def user_exists_by_email(email):
        return User.objects.filter(email=email).exists()

    @staticmethod
    def user_exists_by_username(username):
        return User.objects.filter(username=username).exists()

    @staticmethod
    def create_user(username, email, password, type):
        return User.objects.create_user(
            username=username,
            email=email,
            password=password,
            type=type,
        )

    @staticmethod
    def change_user_password(user, new_password):
        user.set_password(new_password)
        user.save()

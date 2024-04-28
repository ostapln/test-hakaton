import uuid

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.accounts.managers.user_manager import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    class TYPE(models.TextChoices):
        ASSISTANTS = "assistants", _("Assistants")
        RECIPIENTS = "recipients", _("Recipients")

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, db_index=True
    )

    email = models.EmailField(unique=True)

    username = models.CharField(_("username"), max_length=150, unique=True)
    about_me = models.TextField(_("about_me"), blank=True, null=True)
    type = models.CharField(_("Type"), max_length=12, choices=TYPE.choices, blank=False)
    date_added = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    photo = models.ImageField(
        upload_to="avatars",
        blank=True,
        null=True,
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
    )

    objects = CustomUserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    class Meta:
        db_table = "users"
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self) -> str:
        return f"username: {self.username}, email: {self.email}"

    def parse_name(cls, name: str) -> dict:
        parts = name.split(" ", 2)

        if len(parts) == 1:
            return {"first_name": parts[0]}

        if len(parts) == 2:
            return {"first_name": parts[0], "last_name": parts[1]}

        return {"first_name": parts[0], "last_name": " ".join(parts[1:])}

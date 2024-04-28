from django.db import models
from apps.accounts.models import User
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator

class Posts(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(_("title"),max_length=128, blank=False, null=False)
    body = models.TextField(_("body"), null=True, blank=True)
    goal = models.CharField(_("goal"), max_length=128, blank=True, null=False)
    creator_email = models.EmailField(_("creator_email"))
    creator_contact_information = models.CharField(_("creator_contact_information"), blank=True, null=False)
    monobank_link = models.URLField(_("monobank_link"), blank=True, null=True)
    now_progress = models.FloatField("now_progress", blank= True, null=True)
    goal_progress = models.FloatField("goal_progress", blank= True, null=True)
    photo = models.ImageField(upload_to='posts', blank=True, null=True, validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])])
    
    date_added = models.DateTimeField(auto_now_add=True, null=True)
    
    class Meta:
        db_table = "users_posts"
        verbose_name = _("post")
        verbose_name_plural = _("posts")
        
    def __str__(self) -> str:
        return f'user: {self.user}, post titile: {self.title}'
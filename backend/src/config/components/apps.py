DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

THIRD_PARTY = [
    "rest_framework",
    "rest_framework.authtoken",
    "drf_yasg",
    "cachalot",
    "django_extensions",
]

LOCAL_APPS = [
    "apps.accounts",
    "apps.posts",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY + LOCAL_APPS

import os
import secrets

from dotenv import load_dotenv
from split_settings.tools import include

load_dotenv()

SECRET_KEY = str(os.environ.get("SECRET_KEY") or secrets.token_hex(32))

DEBUG = bool(os.environ.get("DEBUG", False))

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "").split(",")

config_folder = "components/"

config_files = [
    "api.py",
    "apps.py",
    "auth.py",
    "boilerplate.py",
    "cache.py",
    "database.py",
    "internationalization.py",
    "logging.py",
    "media.py",
    "middleware.py",
    "smtp.py",
    "static.py",
    "templates.py",
    "timezone.py",
]

include(*(config_folder + file for file in config_files))

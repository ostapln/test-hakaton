from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent

ROOT_URLCONF = "config.urls"

WSGI_APPLICATION = "config.wsgi.application"

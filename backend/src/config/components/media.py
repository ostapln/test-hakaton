import os.path

from config.components.static import BASE_DIR

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

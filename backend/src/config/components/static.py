import os.path

from config.components.boilerplate import BASE_DIR

STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

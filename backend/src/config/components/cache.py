CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://redis:6379/1",
        # "LOCATION": "redis://127.0.0.1:6379/1",
    }
}

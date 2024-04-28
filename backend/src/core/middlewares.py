import logging

logger = logging.getLogger(__name__)


class ResponseLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        logger.debug(f"Request method: {request.method}")
        logger.debug(f"Request path: {request.path}")
        logger.debug(f"Request GET parameters: {request.GET}")

        try:
            logger.debug(f"Request POST parameters: {request.data}")
        except:
            logger.debug(f"Request POST parameters: {request.POST}")

        logger.debug(f"Response status code: {response.status_code}")

        return response

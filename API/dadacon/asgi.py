"""
ASGI config for dadacon project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dadacon.settings')
from django.core.asgi import get_asgi_application

asgiApp = get_asgi_application()

from channels.routing import URLRouter, ProtocolTypeRouter
from channels.security.websocket import AllowedHostsOriginValidator
from chat import routing
from .tokenauth_middleware import TokenAuthMiddleware

application = ProtocolTypeRouter({
    "http": asgiApp,
    "websocket": AllowedHostsOriginValidator(
        TokenAuthMiddleware(URLRouter(routing.websocket_urlpatterns)))
})
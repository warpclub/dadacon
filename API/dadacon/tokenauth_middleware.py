from django.contrib.auth.models import AnonymousUser
from channels.db import database_sync_to_async
from knox.auth import TokenAuthentication
from knox.crypto import hash_token
from knox.models import AuthToken
from channels.middleware import BaseMiddleware
from urllib.parse import parse_qs
from Accounts.models import User

@database_sync_to_async
def get_user(token_key):
    # print(token_key)
    hashed_token = hash_token(token_key)
    # try:
    token = AuthToken.objects.get(digest=hashed_token)
    email = str(token).split(':')[1].strip()
    user = User.objects.get(email=email)
    return user

class TokenAuthMiddleware(BaseMiddleware):

    def __init__(self, inner):
        self.inner = inner

    async def __call__(self, scope, receive, send):
        query_params = parse_qs(scope["query_string"].decode())
        if 'token' in query_params:
            token_key = query_params['token'][-1]
            # if token_name == 'Bearer':
            scope['user'] = await get_user(token_key)
        return await super().__call__(scope, receive, send)

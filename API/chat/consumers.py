import base64
import json
import secrets
from datetime import datetime
from urllib.parse import parse_qs
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.core.files.base import ContentFile
from time import sleep
from knox.crypto import hash_token
from knox.models import AuthToken

from Accounts.models import User
from .models import Message, Conversation
from .serializers import MessageSerializer

def getUser(token_key):
    hashed_token = hash_token(token_key)
    token = AuthToken.objects.get(digest=hashed_token)
    email = str(token).split(':')[1].strip()
    user = User.objects.get(email=email)
    return user

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data=None, bytes_data=None):
        # parse the json data into dictionary object
        text_data_json = json.loads(text_data)

        # Send message to room group
        chat_type = {"type": "chat_message"}
        return_dict = {**chat_type, **text_data_json}
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            return_dict,
        )

    # Receive message from room group
    def chat_message(self, event):
        text_data_json = event.copy()
        text_data_json.pop("type")
        message, morse, attachment = (
            text_data_json["message"],
            text_data_json["morse"],
            text_data_json.get("attachment"),
        )

        conversation = Conversation.objects.get(id=int(self.room_name))
        # sleep(10)
        user = None
        query_params = parse_qs(self.scope["query_string"].decode())
        if 'token' in query_params:
            token_key = query_params['token'][-1]
            user = getUser(token_key)
        
        sender = user

        # Attachment
        if attachment:
            file_str, file_ext = attachment["data"], attachment["format"]

            file_data = ContentFile(
                base64.b64decode(file_str), name=f"{secrets.token_hex(8)}.{file_ext}"
            )
            _message = Message.objects.create(
                sender=sender,
                attachment=file_data,
                text=message,
                conversation_id=conversation,
            )
        else:
            _message = Message.objects.create(
                sender=sender,
                text=message,
                conversation_id=conversation,
            )
        serializer = MessageSerializer(instance=_message)
        # Send message to WebSocket
        self.send(
            text_data=json.dumps(
                serializer.data
            )
        )
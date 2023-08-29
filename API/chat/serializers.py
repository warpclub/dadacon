from .models import Conversation, Message
from rest_framework import serializers
from Accounts.serializers import UserSerializer


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        exclude = ('conversation_id',)


class ConversationListSerializer(serializers.ModelSerializer):
    initiator = UserSerializer()
    receiver = UserSerializer()

    class Meta:
        model = Conversation
        fields = ['id', 'initiator', 'receiver', 'start_time']

    def get_last_message(self, instance):
        message = instance.message_set.first()
        return MessageSerializer(instance=message)


class ConversationSerializer(serializers.ModelSerializer):
    initiator = UserSerializer()
    receiver = UserSerializer()
    message_set = MessageSerializer(many=True)

    class Meta:
        model = Conversation
        fields = ['id', 'initiator', 'receiver', 'message_set']
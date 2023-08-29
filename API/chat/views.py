from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from django.db.models import Q
from django.shortcuts import redirect, reverse
from rest_framework import permissions

from .models import Conversation
from Accounts.models import User
from .serializers import ConversationListSerializer, ConversationSerializer
from .permissions import IsInitiatorOrParticipant

# @api_view(['POST'])
class start_convo(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        data = request.data.copy()
        # print(request)
        # data = request
        username = data['username']
        try:
            participant = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'message': 'You cannot chat with a non existent user'})

        conversation = Conversation.objects.filter(Q(initiator=request.user, receiver=participant) |
                                                Q(initiator=participant, receiver=request.user))
        if conversation.exists():
            return Response({
                'message': 'Chat Already Exists.',
                'id': conversation[0].id,
            })
        else:
            conversation = Conversation.objects.create(initiator=request.user, receiver=participant)
            return Response(ConversationSerializer(instance=conversation).data)


# @api_view(['GET'])
class get_conversation(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, id):
        conversation = Conversation.objects.filter(id=id)
        if not conversation.exists():
            return Response({'message': 'Conversation does not exist'})
        else:
            serializer = ConversationSerializer(instance=conversation[0])
            return Response(serializer.data)


# @api_view(['GET'])
# class conversations(APIView):
#     permission_classes = [permissions.IsAuthenticated]
#     # serializer_class = ConversationListSerializer(instance=conversation_list, many=True)
    
#     def get(self, request):
#         conversation_list = Conversation.objects.filter(Q(initiator=request.user) | Q(receiver=request.user))
#         serializer = ConversationListSerializer(instance=conversation_list)
#         return Response(serializer.data)

class conversations_list(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ConversationListSerializer
    
    def get_queryset(self):
        return Conversation.objects.filter(Q(initiator=self.request.user) | Q(receiver=self.request.user))
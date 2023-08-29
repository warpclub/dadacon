from django.urls import path
from .views import (
    start_convo,
    get_conversation,
    conversations,
)

urlpatterns = [
    path('start/', start_convo.as_view(), name='start_convo'),
    path('<int:id>/', get_conversation.as_view(), name='get_conversation'),
    path('', conversations.as_view(), name='conversations')
]
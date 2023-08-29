from django.contrib import admin
from .models import (Conversation, Message)

class ConservationAdmin(admin.ModelAdmin):
    list_display = ['id', 'start_time']
    
class MessageAdmin(admin.ModelAdmin):
    list_display = ['id', 'sender', 'conversation_id', 'timestamp']

admin.site.register(Conversation, ConservationAdmin)
admin.site.register(Message, MessageAdmin)
from rest_framework import serializers
from .models import Notice
from Accounts.serializers import UserSerializer

class NoticeSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer()
    class Meta:
        model = Notice
        fields = '__all__'
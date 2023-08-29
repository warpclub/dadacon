from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import NoticeSerializer
from .models import Notice

class NoticeListView(ListAPIView):
    model = Notice
    serializer_class = NoticeSerializer
    queryset = Notice.objects.all()
    permission_classes = [IsAuthenticated]


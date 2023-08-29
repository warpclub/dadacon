from django.urls import path
from .views import (
    NoticeListView,
)

urlpatterns = [
    path('', NoticeListView.as_view(), name='list_notices'),
]
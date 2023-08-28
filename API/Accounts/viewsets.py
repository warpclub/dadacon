from rest_framework import viewsets
from django.contrib.auth import get_user_model, views
from django.shortcuts import render, redirect
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAdminAndIsPostPutOrDelete
from .models import User
from .serializers import UserSerializer

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_class = [IsAuthenticated, IsAdminAndIsPostPutOrDelete]
    
    def get_queryset(self):
        if self.request.user is not None:
            qs = User.objects.filter(email=self.request.user)
        else:
            qs = None
        return qs

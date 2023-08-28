from django.contrib.auth import get_user_model
from rest_framework import serializers
from uuid import uuid4
from .models import User

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    """
        Provide data of the logged in user
    """
    password = serializers.CharField(min_length=8, write_only=True)
    class Meta:
        model = User
        exclude = ['token']
        read_only_fields = ['id']
        
    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data['username'], 
            email=validated_data['email'],
            password=validated_data['password'],
        )
        # return user
    
    def update(self, instance, validated_data):
        instance.username = validated_data['username']
        instance.email = validated_data['email']
        instance.set_password(validated_data['password'])
        instance.is_active = True
        
        instance.save()
        return instance

class AuthSerializer(serializers.Serializer):
    '''serializer for the user authentication object'''
    username = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )    
    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        
        user = authenticate(
            request=self.context.get('request'),
            username=username,
            password=password
        )
        
        if not user:
            msg = ('Unable to authenticate with provided credentials')
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return 
from rest_framework import permissions

class IsInitiatorOrParticipant(permissions.BasePermission):        
    def has_permission(self, request, view):
        # allow all POST requests
        if request.user == participant:
            pass
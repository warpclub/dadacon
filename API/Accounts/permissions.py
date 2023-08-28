from rest_framework import permissions

class IsAdminAndIsPostPutOrDelete(permissions.BasePermission):        
    def has_permission(self, request, view):
        # allow all POST requests
        if request.method not in permissions.SAFE_METHODS:
            if request.user.is_staff:
                return True
            else:
                return False
        return False
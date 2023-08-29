from django.db import models
from django.contrib.auth import get_user_model

class Notice(models.Model):
    title = models.CharField('Title', max_length=500)
    detail = models.TextField('Detail')
    posted_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    

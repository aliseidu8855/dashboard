from django.db import models
from django.contrib.auth.models import User

class ScheduledPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scheduled_posts')
    content = models.TextField()
    scheduled_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post by {self.user.username} at {self.scheduled_time}"

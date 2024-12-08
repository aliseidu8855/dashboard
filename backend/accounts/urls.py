from django.urls import path
from .views import RegisterView, UserDetailUpdateView, ScheduledPostView, UserDetailView
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('me/', UserDetailView.as_view(), name='user-detail'),
    path('posts/', ScheduledPostView.as_view(), name='scheduled-posts'),
    path('posts/<int:post_id>/', ScheduledPostView.as_view(), name='scheduled-post-detail'),
]

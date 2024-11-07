from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    #path('dashboard/', views.dashboard, name='dashboard'),
    #path('messages/', views.messages, name='messages'),
    #path('settings/', views.settings, name='settings'),
]

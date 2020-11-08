from .models import register1
from .serializer import register_serialzer
from .views import register_user,login_user
from django.urls import path
urlpatterns=[
    path('register/',register_user.as_view()),
    path('login/',login_user.as_view())
]

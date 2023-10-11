from django.urls import path, re_path
from .views import RegisterView, LoginView, UserView, LogoutView, UserList

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    re_path(r'^userlist/$', UserList.as_view(), name='user-list'),
]
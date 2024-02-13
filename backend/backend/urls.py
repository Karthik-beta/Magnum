from django.contrib import admin
from django.urls import path, include, re_path


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^', include('skf.urls')),
    # re_path(r'^', include('authApp.urls')),
    path('api/', include('authApp.urls')),
]

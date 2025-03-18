from django.urls import path, re_path

from api import views

urlpatterns = [
    path('test-json/', views.test_json),
]

from django.urls import path, re_path

from main import views

urlpatterns = [
    path('hello/', views.hello_world),
    path('about/', views.about),
    re_path(r'^time/plus/(\d{1,2})/$', views.hour_plus),
]
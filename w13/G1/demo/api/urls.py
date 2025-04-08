from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from api.views import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]

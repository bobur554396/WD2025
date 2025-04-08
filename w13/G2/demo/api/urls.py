from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from api.views import ProductListAPIView, ProductDetailAPIView
from api.views.generic_v2 import CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]

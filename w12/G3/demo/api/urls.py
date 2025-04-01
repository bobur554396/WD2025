from django.urls import path

from api.views import products_list, product_detail, ProductListAPIView, ProductDetailAPIView, CategoryProductsAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]

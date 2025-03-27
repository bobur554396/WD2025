from django.urls import path

from api.views import test_json, products_list, product_detail

urlpatterns = [
    path('test-json/', test_json),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
]

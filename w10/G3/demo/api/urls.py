from django.urls import path

from api.views import test_json, products_list

urlpatterns = [
    path('test-json/', test_json),
    path('products/', products_list)
]

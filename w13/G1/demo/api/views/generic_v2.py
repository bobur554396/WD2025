from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD - Create / Read / Update / Delete

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    # permission_classes = (IsAuthenticated,)


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    lookup_url_kwarg = 'product_id'

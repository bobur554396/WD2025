from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD - Create / Read / Update / Delete

class ProductListAPIView(mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)


class ProductDetailAPIView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    lookup_url_kwarg = 'product_id'

    def get(self, request, product_id):
        return self.retrieve(request, product_id)

    def put(self, request, product_id):
        return self.update(request, product_id)

    def delete(self, request, product_id):
        return self.destroy(request, product_id)

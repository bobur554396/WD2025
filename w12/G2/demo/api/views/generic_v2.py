from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, mixins, status

from api.models import Product, Category
from api.serializers import ProductSerializer2, CategorySerializer


# CRUD - Create / Read / Update / Delete


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(pk=category_id)
        except Product.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, category_id):
        category = self.get_object(category_id)
        products = category.products.all()
        serializer = ProductSerializer2(products, many=True)
        return Response(serializer.data)


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    lookup_url_kwarg = 'product_id'

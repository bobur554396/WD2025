from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD - Create / Read / Update / Delete


@api_view(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer2(products, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into request
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, product_id=None):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer2(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = ProductSerializer2(instance=product,
                                        data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        return Response({'message': 'Product deleted'})

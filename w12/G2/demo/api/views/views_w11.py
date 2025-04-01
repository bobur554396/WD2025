import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Product
from api.serializers import ProductSerializer, ProductSerializer2


def test_json(request):
    data = {
        "message": "Hello World",
        "numbers": [1, 2, 3, 4, 5],
        "student": {
            "id": "25BD001",
            "name": "Student 1",
            "gpa": 3.9
        }
    }
    return JsonResponse(data)


# CRUD - Create / Read / Update / Delete


@csrf_exempt
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer2(products, many=True)

        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = ProductSerializer2(data=data)
        if serializer.is_valid():
            serializer.save() # insert into request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def product_detail(request, product_id=None):
    try:
        # select * from products where id=<product_id>
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = ProductSerializer2(product)
        return JsonResponse(serializer.data, status=200)
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = ProductSerializer2(instance=product,
                                        data=new_data)
        if serializer.is_valid():
            serializer.save() # update request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        # SQL: delete request
        product.delete()
        return JsonResponse({'message': 'Product deleted'})

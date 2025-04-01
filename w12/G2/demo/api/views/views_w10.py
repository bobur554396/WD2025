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
        # select * from products;
        products = Product.objects.all()
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            product = Product.objects.create(
                name=data['name'],
                price=data['price'],
                description=data['description'],
            )
        except Exception as e:
            return JsonResponse({'error': str(e)})

        return JsonResponse(product.to_json(), status=201)


@csrf_exempt
def product_detail(request, product_id=None):
    try:
        # select * from products where id=<product_id>
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        return JsonResponse(product.to_json(), status=200)
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        product.name = new_data['name']
        product.price = new_data['price']
        product.description = new_data['description']
        # update sql request
        product.save()
        return JsonResponse(product.to_json())
    elif request.method == 'DELETE':
        # SQL: delete request
        product.delete()
        return JsonResponse({'message': 'Product deleted'})

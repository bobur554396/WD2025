from django.http import HttpResponse, JsonResponse

from api.models import Product


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


def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]

    return JsonResponse(products_json, safe=False)

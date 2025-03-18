from django.http import JsonResponse


def test_json(request):
    data = {
        "message": "Hello World",
        "numbers": [1, 2, 3],
        "student": {
            "id": "25BD001",
            "name": "Student1",
            "gpa": 3.8
        }
    }
    return JsonResponse(data)

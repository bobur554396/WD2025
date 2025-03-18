from datetime import datetime, timedelta

from django.http import HttpResponse


def hello_world(request):
    return HttpResponse("<h1>Hello World!</h1>")


def about(request):
    return HttpResponse("<h1>About page</h1>")


def hour_plus(request, hour=None):
    new_time = datetime.now() + timedelta(hours=int(hour))

    return HttpResponse(str(new_time))

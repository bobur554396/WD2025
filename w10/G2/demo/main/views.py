from datetime import datetime, timedelta
from django.http import HttpResponse


def hello_world(request):
    return HttpResponse("<h1>Hello World!</h1>")


def about(request):
    return HttpResponse("<h1>About page</h1>")


def hours_ahead(request, hour=None):
    cur_time = datetime.now()
    new_time = cur_time + timedelta(hours=int(hour))

    return HttpResponse(new_time)
    # return HttpResponse(f"<h1>Hour = {hour}</h1>")

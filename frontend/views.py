from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')


def details(request, id):
    return render(request, 'frontend/details.html')


# def create(request):
#     return render(request, 'frontend/index.html')

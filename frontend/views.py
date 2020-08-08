from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')


def create(request):
    return render(request, 'frontend/create.html')

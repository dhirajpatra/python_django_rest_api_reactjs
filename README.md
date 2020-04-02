# python_djangoapi_rest_framework
python django rest framework api back end application. You will know that how to use django rest_framework lib and how to use different type of serializers

## how to install

clone this repo to your virtual environment any directory

`pip install django`

`pip install djangorestframework`

`python manage.py migrate`

`python manage.py runserver`

## how to test 

go to postman and create 4 requests
all content type application/json in header

http://localhost:8000/api/articles/ [post]

{
	"title": "this is test article new and eight",
	"description": "this is test descriptionfor eight",
	"body": "this is test body for eight",
	"author_id": "1"
}

to get all articles 

http://localhost:8000/api/articles [get]

to get single article

http://localhost:8000/api/articles/2 [get]

to update an article

http://localhost:8000/articles/3 [put]

{
	"description": "this is updated description after generic updated view"
}

to delete an article

http://localhost:8000/articles/3 [delete]


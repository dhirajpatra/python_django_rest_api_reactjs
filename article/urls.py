from django.urls import path

from .views import ArticleView, AuthorView, SingleArticleView

app_name = "articles"

# reverse look up
urlpatterns = [
    path('articles/', ArticleView.as_view()),
    path('articles/<int:pk>', SingleArticleView.as_view()),
    path('authors/', AuthorView.as_view()),
]

from django.shortcuts import render
from rest_framework.generics import get_object_or_404, GenericAPIView, RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Article, Author
from .serializers import ArticleSerializer, AuthorSerializer


# Create your views here.
class ArticleView(ListModelMixin, CreateModelMixin, GenericAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # create author
    def perform_create(self, serializer):
        author = get_object_or_404(
            Author, id=self.request.data.get('author_id'))
        return serializer.save(author=author)

    # get all articles
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    # create article
    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        # article = request.data.get('article')
        #
        # #create an article
        # serializer = ArticleSerializers(data=article)
        # if serializer.is_valid(raise_exception=True):
        #     article_saved = serializer.save()
        # return Response({
        #     "success": "Article '{}' created successfully".format(article_saved.title)
        # })
        return self.create(request, *args, **kwargs)

    # update article
    def put(self, request, pk):
        saved_article = get_object_or_404(Article.objects.all(), pk=pk)
        data = request.data.get('article')
        # partial because all the fields will not be updated
        serializer = ArticleSerializer(
            instance=saved_article, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            article_saved = serializer.save()
        return Response({
            "success": "Article '{}' updated successfully".format(article_saved)
        })

    # delete an article
    def delete(self, request, pk):
        # get objects with pk
        article = get_object_or_404(Article.objects.all(), pk=pk)
        article.delete()
        return Response({
            "message": "Article with id '{}' has been deleted.".format(pk)
        }, status=204)


class AuthorView(ListModelMixin, CreateModelMixin, GenericAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    # get all authors
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    # create author
    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SingleArticleView(RetrieveUpdateAPIView):
    queryset = Article.objects.all().select_related('author')
    serializer_class = ArticleSerializer

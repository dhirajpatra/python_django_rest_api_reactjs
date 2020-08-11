from rest_framework import serializers

from .models import Article, Author


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    title = serializers.CharField(max_length=120)
    description = serializers.CharField()
    body = serializers.CharField()
    author_id = serializers.IntegerField()
    author_name = serializers.CharField(read_only=True, source="author.name")

    class Meta():
        model = Article
        fields = ['id', 'title', 'description',
                  'body', 'author_id', 'author_name']

    # def create(self, validated_data):
    #     return Article.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.description = validated_data.get('description', instance.description)
    #     instance.body = validated_data.get('body', instance.body)
    #     instance.author_id = validated_data.get('author_id', instance.authour_id)
    #     instance.save()
    #     return instance


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()

    class Meta():
        model = Author
        fields = ['id', 'name', 'email']

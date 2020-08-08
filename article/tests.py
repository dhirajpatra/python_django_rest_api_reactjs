from django.test import TestCase
from article.models import Article
from article.models import Author


# Create your tests here.
class ArticleTestCase(TestCase):

    # this is setup
    def setUp(self):
        Author.objects.create(name="unit test author",
                              email="unit@testauthor.com")
        author = Author.objects.get(name="unit test author")

        Article.objects.create(title="this is unit test title",
            description="this is unit test description",
            body="this is unit test body",
            author=author)

    # this is test case for article
    def test_articles(self):
        article = Article.objects.get(title="this is unit test title")
        self.assertEqual(article.title, "this is unit test title")
        self.assertTrue("description" in article.description)

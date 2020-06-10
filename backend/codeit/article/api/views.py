# from rest_framework import viewsets
# class ArticleViewSet(viewsets.ModelViewSet):
#     serializer_class = ArticleSerializers
#     queryset = Article.objects.all()

from rest_framework import permissions

from rest_framework.generics import (
    ListAPIView,
    CreateAPIView, 
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
)
from article.models import Article
from .serializers import ArticleSerializers


class ArticleCreateView(CreateAPIView):
    print("Article Create View")
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers
    permission_class = (permissions.AllowAny ,)

class ArticleListView(ListAPIView):
    print("Article List vieasdfskljcvxvlkasdrioujewriousdfw")
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers
    permission_class = (permissions.AllowAny ,)

class ArticleDetailView(RetrieveAPIView):
    print("Article Detial View")
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers
    permission_class = (permissions.IsAuthenticated ,)

class ArticleUpdateView(UpdateAPIView):
    print("Article Update View")
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers
    permission_class = (permissions.IsAuthenticated ,)

class ArticleDeleteView(DestroyAPIView):
    print("Article Delete View")
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers
    permission_class = (permissions.IsAuthenticated ,)


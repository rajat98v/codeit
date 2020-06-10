
# from article.api.views import ArticleViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ArticleViewSet, basename='article')
# urlpatterns = router.urls

from django.urls import path, include

from .views import (
    ArticleDetailView,
    ArticleListView,
    ArticleCreateView,
    ArticleDeleteView,
    ArticleUpdateView,
)

urlpatterns = [
        path('', ArticleListView.as_view()), # working
        path('create/', ArticleCreateView.as_view()), #working
        path('<pk>/',ArticleDetailView.as_view() ), #working
        path('<pk>/update/',ArticleUpdateView.as_view() ),#working
        path('<pk>/delete/',ArticleDeleteView.as_view() ), #working
        ]

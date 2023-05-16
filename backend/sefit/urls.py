from django.urls import path

from .views import ServidoresAPIView, EscOperacaoAPIView

urlpatterns = [
    path('servidores/', ServidoresAPIView.as_view(), name='servidores'),
    path('servidores/<int:arg>', ServidoresAPIView.as_view(), name='servidores_by_mat'),
    path('servidores/<str:arg>', ServidoresAPIView.as_view(), name='servidores_by_name'),

    path('operacao/', EscOperacaoAPIView.as_view(), name='operacao'),
    path('operacao/<str:date>', EscOperacaoAPIView.as_view(), name='operacao_by_date'),
]

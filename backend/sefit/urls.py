from django.urls import path

from .views import ServidoresAPIView, EscOperacaoAPIView, ServidorAPIView, AfastamentosAPIView

urlpatterns = [
    path('servidores/', ServidoresAPIView.as_view(), name='servidores'),
    path('servidores/<int:pk>', ServidoresAPIView.as_view(), name='servidores'),
    path('servidor/<int:pk>', ServidorAPIView.as_view(), name='servidores_by_mat'),
    #path('servidores/<str:arg>', ServidoresAPIView.as_view(), name='servidores_by_name'),

    path('ferias/', AfastamentosAPIView.as_view(), name='ferias'),

    path('operacao/', EscOperacaoAPIView.as_view(), name='operacao'),
    path('operacao/<str:date>', EscOperacaoAPIView.as_view(), name='operacao_by_date'),
]

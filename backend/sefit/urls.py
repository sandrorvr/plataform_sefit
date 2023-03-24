from django.urls import path

from .views import getWorker, ServidoresAPIView

urlpatterns = [
    path('worker/', getWorker, name='getWorker'),
    path('servidores/', ServidoresAPIView.as_view(), name='servidores'),
    path('servidores/<int:id>', ServidoresAPIView.as_view(), name='servidores_u')
]

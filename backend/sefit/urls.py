from django.urls import path

from .views import ServidoresAPIView

urlpatterns = [
    path('servidores/', ServidoresAPIView.as_view(), name='servidores'),
    path('servidores/<int:arg>', ServidoresAPIView.as_view(), name='servidores_by_mat'),
    path('servidores/<str:arg>', ServidoresAPIView.as_view(), name='servidores_by_name'),
]

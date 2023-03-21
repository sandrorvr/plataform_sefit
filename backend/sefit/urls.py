from django.urls import path

from .views import getWorker

urlpatterns = [
    path('worker/', getWorker, name='getWorker'),
]

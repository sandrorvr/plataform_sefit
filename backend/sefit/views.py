from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ServidoresSerializers
from .models import Servidores

def getWorker():
    pass

class ServidoresAPIView(APIView):
    def get(self, requests, id=None):
        if id == None:
            servidores = Servidores.objects.all()
            serializer = ServidoresSerializers(servidores, many=True)
        else:
            servidores = Servidores.objects.get(mat=id)
            serializer = ServidoresSerializers(servidores, many=False)

        return Response(serializer.data)

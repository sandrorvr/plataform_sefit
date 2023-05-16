from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ServidoresSerializers
from .models import Servidores


class ServidoresAPIView(APIView):
    def get(self, requests, arg=None):
        if arg == None:
            servidores = Servidores.objects.all()
            serializer = ServidoresSerializers(servidores, many=True)
        elif type(arg)==int:
            servidores = Servidores.objects.get(mat=arg)
            serializer = ServidoresSerializers(servidores, many=False)
        elif type(arg)==str:
            servidores = Servidores.objects.filter(name__iregex=arg)
            serializer = ServidoresSerializers(servidores, many=True)

        return Response(serializer.data)

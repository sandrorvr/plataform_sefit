from datetime import datetime
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from .serializers import ServidoresSerializers, EscOperacaoSerializers
from .models import Servidores, EscOperacao, Operacao


class ServidoresAPIView(generics.ListCreateAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers
    
class ServidorAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers


class EscOperacaoAPIView(APIView):
    def get(self, requests, date='all_date'):
        if date == 'all_date':
            escop = EscOperacao.objects.all()
        else:
            parse_date = datetime.strptime(date, "%Y-%m-%d")
            escop = EscOperacao.objects.filter(operacao__dt_op=parse_date)

        serializer = EscOperacaoSerializers(escop, many=True)
        return Response(serializer.data)
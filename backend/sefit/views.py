from datetime import datetime
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ServidoresSerializers, EscOperacaoSerializers
from .models import Servidores, EscOperacao, Operacao


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

class EscOperacaoAPIView(APIView):
    def get(self, requests, date='all_date'):
        if date == 'all_date':
            escop = EscOperacao.objects.all()
        else:
            parse_date = datetime.strptime(date, "%Y-%m-%d")
            escop = EscOperacao.objects.filter(operacao__dt_op=parse_date)

        serializer = EscOperacaoSerializers(escop, many=True)
        return Response(serializer.data)
from datetime import datetime
import io

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status


from rest_framework.views import APIView
from rest_framework import generics

from .serializers import ServidoresSerializers, EscOperacaoSerializers, AfastamentosSerializers
from .models import Servidores, EscOperacao, Operacao, Afastamentos

#-----------------------------------------------------

class ServidoresAPIView(generics.ListCreateAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers
    
class ServidorAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers

#-----------------------------------------------------

#class AfastamentosAPIView(generics.ListCreateAPIView):
#    queryset = Afastamentos.objects.all()
#    serializer_class = AfastamentosSerializers


class AfastamentosAPIView(APIView):

    def generateFilters(self,filters):
        filters_formated = {}
        for key in filters.keys():
            where_filter = f'{key}__contains'
            if key == 'name':
                where_filter = f'servidor__{where_filter}'
            filters_formated[where_filter] = filters[key]
        return filters_formated


    def get(self, request):
        afastamentos = Afastamentos.objects.all()
        serializer = AfastamentosSerializers(afastamentos, many=True)
        return Response(serializer.data)

    def post(self, request):
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        #print(self.generateFilters(data))
        where_filter = self.generateFilters(data)
        afastamentos = Afastamentos.objects.filter(**where_filter)
        serializer = AfastamentosSerializers(afastamentos, many=True)
        return Response(serializer.data)


#-----------------------------------------------------
class EscOperacaoAPIView(APIView):
    def get(self, requests, date='all_date'):
        if date == 'all_date':
            escop = EscOperacao.objects.all()
        else:
            parse_date = datetime.strptime(date, "%Y-%m-%d")
            escop = EscOperacao.objects.filter(operacao__dt_op=parse_date)

        serializer = EscOperacaoSerializers(escop, many=True)
        return Response(serializer.data)
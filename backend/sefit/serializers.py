from rest_framework import serializers

from .models import Servidores, Operacao, Local, EscOperacao, Area

class ServidoresSerializers(serializers.ModelSerializer):
    class Meta:
        model = Servidores
        fields = [
            'mat', 'name'
        ]

class OperacaoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Operacao
        fields = [
            'id','type_op', 'dt_op', 'co_g', 'co' 
        ]


class LocalSerializers(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = [
            'name', 'desc'
        ]


class AreaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = [
            'area','sup','desc'
        ]

class EscOperacaoSerializers(serializers.ModelSerializer):
    servidor = ServidoresSerializers()
    operacao = OperacaoSerializers()
    local = LocalSerializers()
    area = AreaSerializers()
    class Meta:
        model = EscOperacao
        fields = [
            'operacao','area','servidor','function','local','h_in','h_out','eqp','road_map'
        ]


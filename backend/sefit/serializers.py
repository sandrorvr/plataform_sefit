from datetime import date, datetime

from rest_framework import serializers
from .models import Servidores, Operacao, Local, EscOperacao, Area, Afastamentos

class ServidoresSerializers(serializers.ModelSerializer):
    class Meta:
        model = Servidores
        fields = [
            'mat', 'name','sexo','tel','cpf','admissao','situacao','gp',
            'email','cnh','cat_cnh','bairro','city','esc','esc_detail'
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
            'id','name', 'desc'
        ]


class AreaSerializers(serializers.ModelSerializer):
    sup = ServidoresSerializers()
    class Meta:
        model = Area
        fields = [
            'id','area','sup','desc'
        ]

class EscOperacaoSerializers(serializers.ModelSerializer):
    servidor = ServidoresSerializers()
    operacao = OperacaoSerializers()
    local = LocalSerializers()
    area = AreaSerializers()
    class Meta:
        model = EscOperacao
        fields = [
            'id','operacao','area','servidor','function','local','h_in','h_out','eqp','road_map'
        ]




class AfastamentosSerializers(serializers.ModelSerializer):
    servidor = serializers.SlugRelatedField(read_only=True, slug_field='name')
    count_days = serializers.SerializerMethodField()

    class Meta:
        model = Afastamentos
        fields = [
            'id','servidor','motivo','start','end', 'count_days'
        ]

    def get_count_days(self, obj):
        return (obj.end - obj.start).days
    

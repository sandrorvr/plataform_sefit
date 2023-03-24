from rest_framework import serializers

from .models import Servidores, Operacao, Lotacao, Local, EscMensal, EscOperacao, Permutas, Faltas, Pedidos

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
            'name', 'desc'
        ]

class LotacaoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Lotacao
        fields = [
            'name', 'boss'
        ]

class LocalSerializers(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = [
            'name', 'desc'
        ]

class EscMensalSerializers(serializers.ModelSerializer):
    class Meta:
        model = EscMensal
        fields = [
            'mat','function','lotacao','local','dt_esc_m','h_in','h_out','eqp'
        ]

class EscOperacaoSerializers(serializers.ModelSerializer):
    class Meta:
        model = EscOperacao
        fields = [
            'mat','function','local','dt_op','h_in','h_out','road_map','operacao'
        ]

class PermutasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Permutas
        fields = [
            'selected','not_selected','dt_swap','dt_creation'
        ]

class FaltasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Faltas
        fields = [
            'mat','dt_missing','dt_creation'
        ]

class PedidosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = [
            'mat','tipo','desc','dt_pedido','dt_creation','status'
        ]
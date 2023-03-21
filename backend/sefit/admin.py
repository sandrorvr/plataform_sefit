from django.contrib import admin

from .models import Servidores, Operacao, Lotacao, Local, EscMensal, EscOperacao, Permutas, Faltas, Pedidos

@admin.register(Servidores)
class ServidoresAdmin(admin.ModelAdmin):
    list_display = ('maticula', 'nome')

@admin.register(Operacao)
class OperacaoAdmin(admin.ModelAdmin):
    list_display = ['name_operacao']

@admin.register(Lotacao)
class LotacaoAdmin(admin.ModelAdmin):
    list_display = ['name_lotacao']

@admin.register(Local)
class LocalAdmin(admin.ModelAdmin):
    list_display = ['name_local']
    
@admin.register(EscMensal)
class EscMensalAdmin(admin.ModelAdmin):
    list_display = ('mat', 'cargo', 'lotacao', 
                    'local', 'data_mensal', 'hora_inicio', 
                    'hora_termino', 'equipamento'
                    )

@admin.register(EscOperacao)
class EscOperacaoAdmin(admin.ModelAdmin):
    list_display = ('mat', 'cargo', 'local',
                    'data_operacao', 'hora_inicio', 'hora_termino', 
                    'roteiro', 'operacao'
                    )

@admin.register(Permutas)
class PermutasAdmin(admin.ModelAdmin):
    list_display = ('escalado', 'substituto', 'data_permuta', 'data_criacao')

@admin.register(Faltas)
class FaltasAdmin(admin.ModelAdmin):
    list_display = ('mat', 'data_falta', 'data_criacao')

@admin.register(Pedidos)
class PedidosAdmin(admin.ModelAdmin):
    list_display = ('mat', 'tipo', 'data_pedido', 'data_criacao', 'status')
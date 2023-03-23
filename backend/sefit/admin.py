from django.contrib import admin

from .models import Servidores, Operacao, Lotacao, Local, EscMensal, EscOperacao, Permutas, Faltas, Pedidos

@admin.register(Servidores)
class ServidoresAdmin(admin.ModelAdmin):
    list_display = ('mat', 'name')

@admin.register(Operacao)
class OperacaoAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Lotacao)
class LotacaoAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Local)
class LocalAdmin(admin.ModelAdmin):
    list_display = ['name']
    
@admin.register(EscMensal)
class EscMensalAdmin(admin.ModelAdmin):
    list_display = ('mat', 'function', 'lotacao', 
                    'local', 'dt_esc_m', 'h_in', 
                    'h_out', 'eqp'
                    )

@admin.register(EscOperacao)
class EscOperacaoAdmin(admin.ModelAdmin):
    list_display = ('mat', 'function', 'local',
                    'dt_op', 'h_in', 'h_out', 
                    'road_map', 'operacao'
                    )

@admin.register(Permutas)
class PermutasAdmin(admin.ModelAdmin):
    list_display = ('selected', 'not_selected', 'dt_swap', 'dt_creation')

@admin.register(Faltas)
class FaltasAdmin(admin.ModelAdmin):
    list_display = ('mat', 'dt_missing', 'dt_creation')

@admin.register(Pedidos)
class PedidosAdmin(admin.ModelAdmin):
    list_display = ('mat', 'tipo', 'dt_pedido', 'dt_creation', 'status')
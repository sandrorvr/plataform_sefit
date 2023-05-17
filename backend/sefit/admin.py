from django.contrib import admin

from .models import Servidores, Operacao, Local, EscOperacao, Area

@admin.register(Servidores)
class ServidoresAdmin(admin.ModelAdmin):
    list_display = ('mat', 'name')

@admin.register(Operacao)
class OperacaoAdmin(admin.ModelAdmin):
    list_display = ['type_op', 'dt_op', 'co_g', 'co']


@admin.register(Local)
class LocalAdmin(admin.ModelAdmin):
    list_display = ['name']


@admin.register(Area)
class AreaAdmin(admin.ModelAdmin):
    list_display = ['area','sup','desc']

    

@admin.register(EscOperacao)
class EscOperacaoAdmin(admin.ModelAdmin):
    list_display = ('operacao','area','servidor','function','local','h_in','h_out','eqp','road_map')

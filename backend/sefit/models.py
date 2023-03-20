from django.db import models

class Servidores(models.Model):
    mat = models.IntegerField(name='maticula', primary_key=True)
    name = models.CharField(name='nome', max_length=45)

    def __str__(self):
        return self.name
    
class Operacao(models.Model):
    name = models.CharField(name='name_operacao', max_length=25)
    desc = models.TextField()

    def __str__(self):
        return self.name

class Lotacao(models.Model):
    name = models.CharField(name='name_lotacao', max_length=25)
    boss = models.ForeignKey(Servidores, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Local(models.Model):
    name = models.CharField(name='name_local', max_length=25)
    desc = models.TextField()

    def __str__(self):
        return self.name

class EscMensal(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    function = models.CharField(name='cargo', max_length=30)
    locataca = models.ForeignKey(Lotacao, on_delete=models.CASCADE)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    dt_esc_m = models.DateField(name='data_mensal')
    h_in = models.TimeField(name='hora_inicio')
    h_out = models.TimeField(name='hora_termino')
    eqp = models.CharField(name='equipamento', max_length=20)

    def __str__(self):
        return f'{self.mat.mat} - {str(self.dt_esc_m)}'

class EscOperacao(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    function = models.CharField(name='cargo', max_length=30)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    dt_op = models.DateField(name='data_operacao')
    h_in = models.TimeField(name='hora_inicio')
    h_out = models.TimeField(name='hora_termino')
    road_map = models.CharField(name='roteiro', max_length=5)
    operacao = models.ForeignKey(Operacao, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.operacao.name} - {str(self.dt_op)}'

class Permutas(models.Model):
    selected = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    not_selected = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    dt_swap = models.DateField(name='data_permuta')
    dt_creation = models.DateField(name='data_criacao', auto_now=True)

    def __str__(self):
        return f'{self.selected.name} - {self.not_selected.name}'

class Faltas(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    dt_missing= models.DateField(name='data_falta')
    dt_creation = models.DateField(name='data_criacao', auto_now=True)

    def __str__(self):
        return f'{self.mat} - {str(self.dt_creation)}'

class Pedidos(models):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    




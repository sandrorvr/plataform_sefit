from django.db import models

class Servidores(models.Model):
    mat = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45)

    def __str__(self):
        return self.name
    
class Operacao(models.Model):
    name = models.CharField(max_length=25)
    desc = models.TextField()

    def __str__(self):
        return self.name

class Lotacao(models.Model):
    name = models.CharField(max_length=25)
    boss = models.ForeignKey(Servidores, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Local(models.Model):
    name = models.CharField(max_length=25)
    desc = models.TextField()

    def __str__(self):
        return self.name

class EscMensal(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    function = models.CharField(max_length=30)
    lotacao = models.ForeignKey(Lotacao, on_delete=models.CASCADE)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    dt_esc_m = models.DateField()
    h_in = models.TimeField()
    h_out = models.TimeField()
    eqp = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.mat.mat} - {str(self.dt_esc_m)}'

class EscOperacao(models.Model):
    mat = models.ForeignKey(Servidores, related_name='servidores',on_delete=models.CASCADE)
    function = models.CharField(max_length=30)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    dt_op = models.DateField()
    h_in = models.TimeField()
    h_out = models.TimeField()
    road_map = models.CharField(max_length=5)
    operacao = models.ForeignKey(Operacao, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.operacao.name} - {str(self.dt_op)}'

class Permutas(models.Model):
    selected = models.IntegerField()
    not_selected = models.IntegerField()
    dt_swap = models.DateField()
    dt_creation = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.selected.name} - {self.not_selected.name}'

class Faltas(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    dt_missing= models.DateField()
    dt_creation = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.mat} - {str(self.dt_creation)}'

class Pedidos(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=10)
    desc = models.TextField()
    dt_pedido = models.DateField()
    dt_creation = models.DateField(auto_now=True)
    status = models.BooleanField()

    def __str__(self):
        return f'{self.mat} - {self.tipo}'
    



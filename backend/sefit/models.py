from django.db import models

class Servidores(models.Model):
    mat = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    sexo = models.CharField(max_length=1, blank=True, null=True)
    tel = models.IntegerField(max_length=11, blank=True, null=True)
    cpf = models.CharField(max_length=11, blank=True, null=True)
    admissao = models.DateField(blank=True, null=True)
    situacao = models.CharField(max_length=10, blank=True, null=True) 
    gp = models.CharField(max_length=10, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    cnh = models.IntegerField(max_length=10, blank=True, null=True)
    cat_cnh = models.CharField(max_length=2, blank=True, null=True)
    bairro = models.CharField(max_length=30, blank=True, null=True)
    city = models.CharField(max_length=30, blank=True, null=True)
    esc = models.CharField(max_length=4, blank=True, null=True)
    esc_detail = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name
    
class Operacao(models.Model):
    type_op = models.CharField(max_length=25)
    dt_op = models.DateField()
    co_g = models.ForeignKey(Servidores,on_delete=models.CASCADE, null=False, related_name='coo_general')
    co = models.ForeignKey(Servidores,on_delete=models.CASCADE, null=False, related_name='coo')

    def __str__(self):
        return f'{self.type_op} - {self.dt_op}'


class Local(models.Model):
    name = models.CharField(max_length=25)
    desc = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Area(models.Model):
    area = models.CharField(max_length=25)
    sup = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    desc = models.TextField(max_length=270)

    def __str__(self):
        return self.area


class EscOperacao(models.Model):
    area = models.ForeignKey(Area,on_delete=models.CASCADE)
    servidor = models.ForeignKey(Servidores,on_delete=models.CASCADE)
    function = models.CharField(max_length=30)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    h_in = models.TimeField()
    h_out = models.TimeField()
    eqp = models.CharField(max_length=10)
    road_map = models.CharField(max_length=5)
    operacao = models.ForeignKey(Operacao, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.operacao.type_op} - {str(self.servidor.name)} -'

class Afastamentos(models.Model):
    servidor = models.ForeignKey(Servidores,on_delete=models.CASCADE, null=False)
    motivo = models.CharField(max_length=25, null=False)
    start = models.DateField(null=False)
    end = models.DateField(null=False)

    def __str__(self):
        return f'{self.servidor.name} - {str(self.motivo)}'
    



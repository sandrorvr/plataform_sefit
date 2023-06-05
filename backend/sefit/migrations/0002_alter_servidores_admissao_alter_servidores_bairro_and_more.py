# Generated by Django 4.1.7 on 2023-06-05 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sefit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servidores',
            name='admissao',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='bairro',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='cat_cnh',
            field=models.CharField(blank=True, max_length=2),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='city',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='cnh',
            field=models.IntegerField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='cpf',
            field=models.CharField(blank=True, max_length=11),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='esc',
            field=models.CharField(blank=True, max_length=4),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='esc_detail',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='gp',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='mat',
            field=models.IntegerField(blank=True, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='name',
            field=models.CharField(blank=True, max_length=45),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='sexo',
            field=models.CharField(blank=True, max_length=1),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='situacao',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='servidores',
            name='tel',
            field=models.IntegerField(blank=True, max_length=11),
        ),
    ]
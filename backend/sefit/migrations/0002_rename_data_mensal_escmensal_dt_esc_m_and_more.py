# Generated by Django 4.1.7 on 2023-03-23 14:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sefit', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='escmensal',
            old_name='data_mensal',
            new_name='dt_esc_m',
        ),
        migrations.RenameField(
            model_name='escmensal',
            old_name='equipamento',
            new_name='eqp',
        ),
        migrations.RenameField(
            model_name='escmensal',
            old_name='cargo',
            new_name='function',
        ),
        migrations.RenameField(
            model_name='escmensal',
            old_name='hora_inicio',
            new_name='h_in',
        ),
        migrations.RenameField(
            model_name='escmensal',
            old_name='hora_termino',
            new_name='h_out',
        ),
        migrations.RenameField(
            model_name='escoperacao',
            old_name='data_operacao',
            new_name='dt_op',
        ),
        migrations.RenameField(
            model_name='escoperacao',
            old_name='cargo',
            new_name='function',
        ),
        migrations.RenameField(
            model_name='escoperacao',
            old_name='hora_inicio',
            new_name='h_in',
        ),
        migrations.RenameField(
            model_name='escoperacao',
            old_name='hora_termino',
            new_name='h_out',
        ),
        migrations.RenameField(
            model_name='escoperacao',
            old_name='roteiro',
            new_name='road_map',
        ),
        migrations.RenameField(
            model_name='faltas',
            old_name='data_criacao',
            new_name='dt_creation',
        ),
        migrations.RenameField(
            model_name='faltas',
            old_name='data_falta',
            new_name='dt_missing',
        ),
        migrations.RenameField(
            model_name='local',
            old_name='name_local',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='lotacao',
            old_name='name_lotacao',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='operacao',
            old_name='name_operacao',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='pedidos',
            old_name='data_criacao',
            new_name='dt_creation',
        ),
        migrations.RenameField(
            model_name='pedidos',
            old_name='data_pedido',
            new_name='dt_pedido',
        ),
        migrations.RenameField(
            model_name='permutas',
            old_name='data_criacao',
            new_name='dt_creation',
        ),
        migrations.RenameField(
            model_name='permutas',
            old_name='data_permuta',
            new_name='dt_swap',
        ),
        migrations.RenameField(
            model_name='permutas',
            old_name='escalado',
            new_name='not_selected',
        ),
        migrations.RenameField(
            model_name='permutas',
            old_name='substituto',
            new_name='selected',
        ),
        migrations.RenameField(
            model_name='servidores',
            old_name='maticula',
            new_name='mat',
        ),
        migrations.RenameField(
            model_name='servidores',
            old_name='nome',
            new_name='name',
        ),
    ]
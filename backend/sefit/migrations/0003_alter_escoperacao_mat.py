# Generated by Django 4.1.7 on 2023-05-16 12:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sefit', '0002_rename_data_mensal_escmensal_dt_esc_m_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='escoperacao',
            name='mat',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='servidores', to='sefit.servidores'),
        ),
    ]
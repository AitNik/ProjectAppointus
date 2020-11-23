# Generated by Django 3.1.2 on 2020-11-15 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('two_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookings2',
            name='treatment',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='register1',
            name='adhaarcard',
            field=models.CharField(default=True, max_length=344),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='bookings2',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='register1',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]

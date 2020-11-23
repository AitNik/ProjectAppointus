# Generated by Django 3.1.2 on 2020-11-15 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='bookings2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=334)),
                ('name', models.CharField(max_length=334)),
                ('email', models.EmailField(max_length=254)),
                ('mobile_no', models.CharField(max_length=334)),
                ('category', models.CharField(max_length=334)),
                ('issue', models.CharField(max_length=334)),
                ('your_status', models.IntegerField()),
                ('present_status', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='register1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=334)),
                ('email', models.CharField(max_length=334)),
                ('mobile_no', models.CharField(max_length=334)),
                ('password', models.CharField(max_length=334)),
            ],
        ),
    ]

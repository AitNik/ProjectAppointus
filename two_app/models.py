from django.db import models

# Create your models here.
class register1(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(max_length=334)
    name=models.CharField(max_length=334)
    email=models.CharField(max_length=334)
    mobile_no=models.CharField(max_length=334)
    password=models.CharField(max_length=334)
    adhaarcard=models.CharField(max_length=344)

    def __str__(self):
        return self.username


                
class bookings2(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(max_length=334)
    name=models.CharField(max_length=334)
    email=models.EmailField()
    mobile_no=models.CharField(max_length=334)
    adhaarcard=models.CharField(max_length=334)
    category=models.CharField(max_length=334)
    issue=models.CharField(max_length=334)
    your_status=models.IntegerField()
    present_status=models.IntegerField()
    treatment=models.BooleanField(default=False)

    def __str__(self):
        return self.name

class doctor_register1(models.Model):
    username=models.CharField(max_length=334)
    name=models.CharField(max_length=334)
    email=models.CharField(max_length=334)
    mobile_no=models.CharField(max_length=334)
    password=models.CharField(max_length=334)
    adhaarcard=models.CharField(max_length=12,primary_key=True)        
    type_doctor=models.CharField(max_length=334)
    address=models.TextField()
from django.db import models

# Create your models here.
class register1(models.Model):
    username=models.CharField(max_length=334)
    email=models.CharField(max_length=334)
    mobile_no=models.CharField(max_length=334)
    password=models.CharField(max_length=334)

    def __str__(self):
        return self.username

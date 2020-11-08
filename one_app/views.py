from django.shortcuts import render
from .models import register1
from .serializer import register_serialzer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import psycopg2

con=psycopg2.connect(
                database="college_project",
                password="nintynine@99",
                user="postgres",
                host="localhost",
                port="5432"
                )


# Create your views here.
class register_user(APIView):
    def get(self,request):
        data=register1.objects.all()
        pract=register_serialzer(data,many=True)
        return Response(pract.data,status=status.HTTP_200_OK)
    def post(self,request):    
        data=request.data
        username=data.get("username")
        email=data.get("email")
        mobile_no=data.get("mobile_no")
        password=data.get("password")
        try:
            cursorr=con.cursor()
            cursorr.execute(f"insert into one_app_register1(username,email,mobile_no,password) values('{username}','{email}','{mobile_no}','{password}')")
            con.commit()
            return Response(status=status.HTTP_201_CREATED)
        except (Exception, psycopg2.Error) as error :
            return Response(error,status=status.HTTP_400_BAD_REQUEST)

#     def post(self,request):
#         serialized_data=register_serialzer(data=request.data)
#         if serialized_data.is_valid():
#             serialized_data.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serialized_data.errors,status=status.HTTP_400_BAD_REQUEST)
class login_user(APIView):   
    def login(self,name,password):
        try:
            return register1.objects.get(username=name,password=password)
        except :
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def get(self,request):
        data=request.data
        name=data.get('username')
        password=data.get('password')
        print(name,password)
        # print(type(name),type(password))
        # pract=self.login(name,password)
        cursorr=con.cursor()
        cursorr.execute(f"select username  from public.one_app_register1 where username='{name}' and password='{password}'")
        user=cursorr.fetchall()
        if len(user)!=0:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)    





from django.shortcuts import render
from .models import register1,bookings2
from .serializer import register1_serializer,bookings2_serializer,doctor_register_serializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status,permissions
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
        pract=register1_serializer(data,many=True)
        return Response(pract.data,status=status.HTTP_200_OK)
    def post(self,request):
        data=request.data
        username=data.get("username")
        name=data.get("name")
        email=data.get("email")
        mobile_no=data.get("mobile_no")
        password=data.get("password")
        aadhar_card=data.get("adhaarcard")
        try:
            cursorr=con.cursor()
            cursorr.execute(f"insert into public.two_app_register1(username,email,mobile_no,password,adhaarcard,name) values('{username}','{email}','{mobile_no}','{password}','{aadhar_card}','{name}'  )")
            con.commit()
            
            msg="!!! Registration Successfull !!!"
            return Response(data,status=status.HTTP_201_CREATED)
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
        adhaarcard=data.get('adhaarcard')
        cursorr=con.cursor()
        cursorr.execute(f"select username  from public.two_app_register1 where username='{name}' and password='{password}' and adhaarcard='{adhaarcard}'")
        user=cursorr.fetchall()
       
        if len(user)!=0:
            
            msg="!!! Login Successfull !!!"
            return Response(msg,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)    

class trail(APIView):
    def get(self,request):
        # data=request.data
        cursorr=con.cursor()
        cursorr.execute(f"select count(username) as ucount from two_app_register1 as t where t.username='sai' group by t.username  ")
        value=cursorr.fetchall()
        print(value[0][0])
        return Response(value,status=status.HTTP_200_OK)

class Bookings(APIView):
    def get(self,request):
        data=bookings2.objects.all()
        book_data=bookings2_serializer(data,many=True)
        return Response(book_data.data,status=status.HTTP_200_OK)

    def post(self,request):
        data=request.data
        username=data.get('username')
        name=data.get('name')
        email=data.get('email')
        mobile_no=data.get('mobile_no')
        category=data.get('category')
        aadhar_card=data.get('aadhar_card')
        issue=data.get('issue')
        cursorr=con.cursor()
        cursorr.execute(f"select count(category) as ucount from two_app_bookings2 as t where t.category='{category}' ")
        value=cursorr.fetchall()
        your_status=int(value[0][0])+1
        cursorr.execute(f"select count(treatment) as utreat from two_app_bookings2 as t where t.treatment=True and t.category='{category}' ")
        tvalue=cursorr.fetchall()
        present_status=int(tvalue[0][0])+1
        try:
            cursorr.execute(f"insert into two_app_bookings2(username,name,email,mobile_no,category,adhaarcard,issue,your_status,present_status,treatment) values('{username}','{name}','{email}','{mobile_no}','{category}','{aadhar_card}','{issue}',{your_status},{present_status},'{False}')")           
            con.commit()
            msg="!!! Successfully Booked !!!"
            return Response(msg,status=status.HTTP_201_CREATED)
        except (Exception, psycopg2.Error) as error :
            return Response(error,status=status.HTTP_400_BAD_REQUEST)

#     def get(self,request):
#         data=request.data     
#         username=data.get('username')   
#         try:
#             cursorr=con.cursor()
#             cursorr.execute(f"select * from two_app_bookings2 where username='{username}'")
#             con.commit()
#         except (Exception, psycopg2.Error) as error :
#             return Response(error,status=status.HTTP_400_BAD_REQUEST)
# class doctor_login1(APIView):
#     pass
class doctor_register(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    # def __init__(self, **kwargs):
    #     super().__init__(**kwargs)
    #     self.method = None
    #     self.data = None

    # def get(self,request):
    #     data=doctor_register1.objects.all()
    #     serialize_data=doctor_register1_serializer(data,many=True)
    #     return Response(serialize_data,status=status.HTTP_200_OK)
    def get(self,request):
        data=request.data
        name=data.get('username')
        password=data.get('password')
        adhaarcard=data.get('adhaarcard')
        cursorr=con.cursor()
        cursorr.execute(f"select username  from public.two_app_doctor_register1 where username='{name}' and password='{password}' and adhaarcard='{adhaarcard}'")
        user=cursorr.fetchall()
       
        if len(user)!=0:
            
            msg="!!! Login Successfull !!!"
            return Response(msg,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)  
    
    def post(self,request):
        data=request.data
        username=data.get('username')
        name=data.get('name')
        email=data.get('email')
        mobile_no=data.get('mobile_no')
        password=data.get('password')
        adhaarcard=data.get('adhaarcard')
        type_doctor=data.get('type_doctor')
        address=data.get('address')
        try:
            cursorr=con.cursor()
            cursorr.execute(f"insert into two_app_doctor_register1(username,name,email,mobile_no,password,adhaarcard,type_doctor,address) values('{username}','{name}','{email}','{mobile_no}','{password}','{adhaarcard}','{type_doctor}','{address}')")
            con.commit()
            msg="!!! Successfully Registered Doctor !!!"
            return Response(msg,status=status.HTTP_201_CREATED)
        except (Exception, psycopg2.Error) as error :
            return Response(error,status=status.HTTP_400_BAD_REQUEST)    

class doctor_treatment(APIView):
    def fetch_data(self,category):
        query = f'SELECT * from booking2 where category="{category} " and treatment="True";'
        value = """""" + str(query) + """"""
        self.cursor.execute(value)
        query_value = self.cursor.fetchall()
        return query_value
    def post(self,request):
        data=request.data
        treatment=data.get('treatment')
        username=data.get('username')
        adhaarcard=data.get('adhaarcard')
        try:
            cursorr=con.cursor()
            cursorr.execute(f"update bookings2 set treatment='true' where adhaarcard='{adhaarcard}'")
            data=fetch_data()
            for row in data:
                row[present_value]
            con.commit()
            msg="Happy Treated"
            return Response(msg,status=status.HTTP_200_OK)
        except (Exception, psycopg2.Error) as error :
            return Response(error,status=status.HTTP_400_BAD_REQUEST)    

        
    # def put(self,request):
    #     # data=request.get('username')
    #     print(request)
    #     data_doctor=bookings2.objects.get(adhaarcard=request.get('adhaarcard'))
    #     print(data_doctor)
    #     data_serializer=bookings2_serializer(data_doctor,data=request.data)
    #     if data_serializer.is_valid():
    #         data_serializer.save()
    #         data["success"]=["Happy Day Doctor"]
    #         return Response(data=data,status=status.HTTP_200_OK)
    #     return Response(data_serializer.errors,status=status.HTTP_400_BAD_REQUEST)    



    # @api_view(['GET'],)
    # def login(self,request,*args,**kwargs):
    #     data=request.data
    #     name=data.get('username')
    #     password=data.get('password')
    #     adhaarcard=data.get('adhaarcard')
    #     cursorr=con.cursor()
    #     cursorr.execute(f"select username  from public.two_app_doctor_register1 where username='{name}' and password='{password}' and adhaarcard='{adhaarcard}'")
    #     user=cursorr.fetchall()
       
    #     if len(user)!=0:
            
    #         msg="!!! Login Successfull !!!"
    #         return Response(msg,status=status.HTTP_200_OK)
    #     else:
    #         return Response(status=status.HTTP_400_BAD_REQUEST)    







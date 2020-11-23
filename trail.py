
import psycopg2

con=psycopg2.connect(
                database="college_project",
                password="nintynine@99",
                user="postgres",
                host="localhost",
                port="5432"
                )
def post():
    category='dentist'
    cursorr=con.cursor()
    cursorr.execute(f"select count(category) as ucount from two_app_bookings2 as t where t.category='{category}' ")
    value=cursorr.fetchall()
    print(value)
    your_status=int(value[0][0])+1
    cursorr.execute(f"select count(treatment) as utreat from two_app_bookings2 as t where t.treatment=True and t.category='{category}' ")
    tvalue=cursorr.fetchall()
    print(tvalue)
    present_status=int(tvalue[0][0])+1
    print(present_status,your_status)
    # try:
    #     cursorr.execute(f"insert into two_app_bookings2(username,name,email,mobile_no,category,adhaarcard,issue,your_status,present_status,treatment) values('{username}','{name}','{email}','{mobile_no}','{category}','{aadhar_card}','{issue}',{your_status},{present_status},'{False}')")           
    #     con.commit()
    #     msg="!!! Successfully Booked !!!"
    #     # return Response(msg,status=status.HTTP_201_CREATED)
    # except (Exception, psycopg2.Error) as error :
    #     # return Response(error,status=status.HTTP_400_BAD_REQUEST)                
post()    
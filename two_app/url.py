from .models import register1,bookings2,doctor_register1
from .serializer import register1_serializer,bookings2_serializer,doctor_register_serializer
from .views import register_user,login_user,Bookings,trail,doctor_register,doctor_treatment
from django.urls import path
urlpatterns=[
    #client
    path('register/',register_user.as_view()),
    path('login/',login_user.as_view()),
    path('bookings/',Bookings.as_view()),
    path('trail/',trail.as_view()),

    #doctor
    path('doctor_register/',doctor_register.as_view()),
    path('doctor_login/',doctor_register.as_view()),
    path('doctor_treatment/',doctor_treatment.as_view()),
    # path('doctor_login/',doctor_register.login()),
]

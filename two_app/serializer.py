from .models import bookings2,register1,doctor_register1
from rest_framework import serializers

class register1_serializer(serializers.ModelSerializer):
    class Meta:
        model=register1
        fields='__all__'

class bookings2_serializer(serializers.ModelSerializer):
    class Meta:
        model=bookings2
        fields='__all__'

class doctor_register_serializer(serializers.ModelSerializer):
    class Meta:
        model=doctor_register1
        fields='__all__'


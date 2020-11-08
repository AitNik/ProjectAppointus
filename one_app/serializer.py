from .models import register1
from rest_framework import serializers
class register_serialzer(serializers.ModelSerializer):
    class Meta:
        model=register1
        fields='__all__';
from rest_framework import serializers
from .models.models import SangreData

class SangreDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SangreData
        fields = '__all__'

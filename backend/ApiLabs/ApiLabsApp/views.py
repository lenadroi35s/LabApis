from rest_framework import generics
from .models import SangreData
from .serializers import SangreDataSerializer
from drf_yasg.utils import swagger_auto_schema
        
class SangreDataListCreateView(generics.ListCreateAPIView):
    queryset = SangreData.objects.all()
    serializer_class = SangreDataSerializer

class SangreDataRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SangreData.objects.all()
    serializer_class = SangreDataSerializer
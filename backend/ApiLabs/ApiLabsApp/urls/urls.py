from django.urls import path
from ..views.views import SangreDataListCreateView, SangreDataRetrieveUpdateDestroyView



urlpatterns = [
    path('api/sangre-data/', SangreDataListCreateView.as_view(), name='sangre-data-list'),
    path('api/sangre-data/<int:pk>/', SangreDataRetrieveUpdateDestroyView.as_view(), name='sangre-data-detail'),
]

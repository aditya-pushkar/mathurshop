from django.urls import path

from .views import service, service_update

urlpatterns = [
    path('', service, name='service'),
    path('update/<str:service_id>/', service_update, name='service_update'),
]

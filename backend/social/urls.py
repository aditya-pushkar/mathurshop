from django.urls import path 

from .views import socials, socials_update

urlpatterns = [
    path('', socials, name="socials"),
    path('update/<str:socials_id>/', socials_update, name="socials_update"),
]

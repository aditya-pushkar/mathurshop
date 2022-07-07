from django.urls import path

from .views import flowers, bouquet, product_detail, product_create, product_update, product_delete

urlpatterns = [
    path('flowers/', flowers,  name="flowers"),
    path('bouquet/', bouquet,  name="bouquet"),
    path('create/', product_create,  name="product_create"),
    path('detail/<str:product_id>/', product_detail, name="product_detail"),
    path('update/<str:product_id>/', product_update, name="product_update"),
    path('delete/<str:product_id>/', product_delete, name="product_delete"),
]

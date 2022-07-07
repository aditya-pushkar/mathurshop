from pyexpat import model
from rest_framework.serializers import ModelSerializer

from .models import Product

class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'
from rest_framework.serializers import ModelSerializer

from .models import Social

class SocialSerializer(ModelSerializer):

    class Meta:
        model = Social
        fields = '__all__'

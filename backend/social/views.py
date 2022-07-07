from asyncio import constants
from functools import partial
from os import stat
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Social
from .serializers import SocialSerializer


# If user request the socials but there is no tables in the database then we first created the model automaticaly
# And should be only one social for the site
@api_view(['GET'])
def socials(request):
    try:
        social_object = Social.objects.all()[:1]
        if len(social_object)==0:
            social_object.create(
                fb =  'https://www.facebook.com/',
                intagram  = 'https://www.instagram.com/',
                twitter = 'https://www.twitter.com/',
                phone_number = 1234567890,
                whatsapp_number = 1234567890
            )
            social_object.save()
        serializer = SocialSerializer(social_object, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    except Exception as error:
        return Response({"ERROR": f"{error}"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def socials_update(request, socials_id):
    try:
        social_object = Social.objects.get(id=socials_id)
        if(social_object):
            # data = request.data
            serializer = SocialSerializer(instance=social_object, data=request.data)
            if serializer.is_valid():
                serializer.save()
                print("200 OK", serializer.data)
                return Response(status=status.HTTP_200_OK)
            print("204 NO CONTENT :",serializer.data)
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as error:
        return Response({"ERROR" : f"{error}"}, status=status.HTTP_400_BAD_REQUEST)




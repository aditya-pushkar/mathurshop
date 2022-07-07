from os import stat
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ServiceSerializer
from .models import Service

@api_view(['GET'])
def service(request):
    try:
        service_object = Service.objects.all()[:1]
        if len(service_object)==0:
            service_object.create(
                PrimaryImg =  '',
                img_1 = '',
                img_2 = '',
                img_3 = '',
                img_4 = ''
            )
            service_object.save()
        serializer = ServiceSerializer(service_object, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Exception as error:
        return Response({"ERROR": f"{error}"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def service_update(request, service_id):
    try:
        service_object = Service.objects.get(pk=service_id)
        if service_object:
            serializer = ServiceSerializer(service_object, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as error:
        return Response(status=status.HTTP_400_BAD_REQUEST)

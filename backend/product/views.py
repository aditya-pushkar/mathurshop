from ast import parse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

from .models import Product

from .serializers import ProductSerializer
# Create your views here.

@api_view(['GET'])
def flowers(request):
    try:
        paginator = PageNumberPagination()
        paginator.page_size = 4
        flowers_object = Product.objects.filter(tag='flower')
        result_page  = paginator.paginate_queryset(flowers_object, request)
        serializer = ProductSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def bouquet(request):
    try:
        bouquet_object = Product.objects.filter(tag='bouquet')
        if bouquet_object:
            paginator = PageNumberPagination()
            paginator.page_size = 4
            result_page  = paginator.paginate_queryset(bouquet_object, request)
            serializer = ProductSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def product_detail(request, product_id):
    try:
        model_product = Product.objects.get(pk=product_id)
        serializer = ProductSerializer(model_product, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def product_create(request):
    try:
        data = request.data
        title = data.get('title')
        description = data.get('description')
        tag = data.get('tag')
        primaryImg = data.get('primaryImg')
        img_1 = data.get('img_1')
        img_2 = data.get('img_2')
        img_3 = data.get('img_3')
        img_4 = data.get('img_4')

        product_object = Product.objects.create(
            title=title,
            description=description,
            tag=tag,
            primaryImg=primaryImg,
            img_1=img_1,
            img_2=img_2,
            img_3=img_3,
            img_4=img_4
           
        )
        product_object.save()
        serializer = ProductSerializer(product_object)
        return Response(serializer.data['id'], status=status.HTTP_201_CREATED)
        
    except Exception as error:
        print("RESQUES DATA>>>>>", request.data)
        print("ERROR>>>>>", error, "<<<<<<<<<<")
        return Response({"ERROR", f"{error}"},status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def product_update(request, product_id):
    try:
        product_object = Product.objects.get(id=product_id)
        if(product_object):
            serializer = ProductSerializer(instance=product_object, partial=True, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_206_PARTIAL_CONTENT)
    except Exception as error:
        return Response({"Error", f"{error}"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def product_delete(request, product_id):
    try:
        product_object = Product.objects.get(id=product_id)
        if(product_object):
            product_object.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as error:
        print("ERROR", error)
        return Response({"Error", f"{error}"}, status=status.HTTP_400_BAD_REQUEST)


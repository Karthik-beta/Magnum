from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt


from skf.models import (BreakdownCategory,
                        Shift, Company, Location, Shopfloor, Assemblyline, Machine, Andon)
from skf.serializers import (BreakdownCategorySerializer,
                            ShiftSerializer, CompanySerializer, LocationSerializer, ShopfloorSerializer, AssemblylineSerializer,
                            MachineSerializer, AndonSerializer)


class BreakdownCategoryListCreateView(generics.ListCreateAPIView):
    queryset = BreakdownCategory.objects.all()
    serializer_class = BreakdownCategorySerializer

class BreakdownCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BreakdownCategory.objects.all()
    serializer_class = BreakdownCategorySerializer
    lookup_url_kwarg = "breakdownCategoryId" 

class ShiftListCreateView(generics.ListCreateAPIView):
    queryset = Shift.objects.all()
    serializer_class = ShiftSerializer

class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class LocationListCreateView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class ShopfloorListCreateView(generics.ListCreateAPIView):
    queryset = Shopfloor.objects.all()
    serializer_class = ShopfloorSerializer

class AssemblylineListCreateView(generics.ListCreateAPIView):
    queryset = Assemblyline.objects.all()
    serializer_class = AssemblylineSerializer

class MachineListCreateView(generics.ListCreateAPIView):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer


@csrf_exempt
def andonapi(request, id=0):
    if request.method == 'GET':
        andons = Andon.objects.all()
        andon_serializer = AndonSerializer(andons, many=True, context={'request': request})
        return JsonResponse(andon_serializer.data, safe=False)
    
    elif request.method == 'POST':
        andon_data = JSONParser().parse(request)
        andon_serializer = AndonSerializer(data=andon_data, context={'request': request})
        if andon_serializer.is_valid():
            andon_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse(andon_serializer.errors, status=400)

    
    elif request.method == 'PUT':
        andon_data = JSONParser().parse(request)
        andon = Andon.objects.get(AndonId=andon_data['AndonId'])
        andon_serializer = AndonSerializer(andon, data=andon_data, context={'request': request})
        if andon_serializer.is_valid():
            andon_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse(andon_serializer.errors, status=400)
    
    elif request.method == 'DELETE':
        andon = Andon.objects.get(ticket=id)
        andon.delete()
        return JsonResponse("Deleted Successfully", safe=False)
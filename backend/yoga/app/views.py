from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import People
from .serializers import PeopleSerializer
from django.http import HttpResponse
from datetime import datetime
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def enroll(request , pk=None):
    if request.method == 'POST':
        data = request.data.get('body')
        email = data.get("email")
        print(email)
        person = People.objects.filter(email__contains =email)
        
        if person.exists():
            return Response({"msg" : "User already enrolled , please check your fee status"})
         
        
        serializer = PeopleSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
        return Response({"msg" : "user created" , "data" : data})
    return HttpResponse(serializer._errors)

# ----------------------------------

@api_view(['PUT'])
def make_payment(request ,  pk=None):

    data = request.data.get('body')
    print(data)
    ema = data.get("email")
    person = People.objects.filter(email =ema)
    
    if person.exists() is False:
        return Response({"msg" : "User is new , Please do the enrollment "})

    json_data = person.values()[0]
    fees_paid = json_data.get('fees')
    old_date = json_data.get('date')

    if fees_paid is False:
        People.objects.filter(email=ema).update(date = datetime.now() , fees = True)
        return Response({"msg" : "Fee Paid1" })
    
    old_month = old_date.month
    curr_month = datetime.today().month
 
    if old_month is not curr_month:
        People.objects.filter(email=ema).update(date = datetime.now() , fees = True)
        return Response({"msg" : "Fee Paid2" })

    else:
        return Response({"msg" : "Fee for the current month is Already paid"})



@api_view(['PUT'])
def edit_batch(request , pk = None):

    print(request.data.get('body'))
    data = request.data.get('body')
    new_batch = data.get('batch')
    ema = data.get("email")

    person = People.objects.filter(email =ema)

    if person.exists() is False:
        return Response({"msg" : "User is new , Please do the enrollment "})

    
    json_data = person.values()[0]
    fees_paid = json_data.get('fees')
    old_date = json_data.get('date')
    old_month = old_date.month
    curr_month = datetime.today().month
    batch_updated_date = json_data.get('batch_date')
    batch_updated_month = batch_updated_date.month


    if(batch_updated_month is curr_month):
        return Response({"msg" : "batch can not be changed within same month and Please pay the Fee" })

    if fees_paid is False and old_month is curr_month:
        return Response({"msg" : "batch can not be changed within same month and Please pay the Fee" })

    if fees_paid is True and old_month is curr_month:
        return Response({"msg" : "batch can not be changed within same month" })

    if fees_paid is False and old_month is not curr_month:
        People.objects.filter(email=ema).update(batch = new_batch , batch_date= datetime.now())
        return Response({"msg" : "Batch updated Please pay the Due Fee and current Fee"})

    else:
        People.objects.filter(email=ema).update(batch = new_batch,batch_date = datetime.now())
        return Response({"msg" : "Batch updated Please do the payment for this month"})


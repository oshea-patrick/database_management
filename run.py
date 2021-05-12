import sys
import os

from location import Location
from reservation import Reservation
from user import User
from item import Item
from sign import Sign
from check import Check

from userDao import UserDao
from locationDao import LocationDao
from reserveDao import ReserveDao
from itemDao import ItemDao

from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__) 
CORS(app)

userDao = UserDao()
locationDao = LocationDao()
reserveDao = ReserveDao()
itemDao = ItemDao()

def extractUser(request):
    user = User(request.json['email'], request.json['first_name'], request.json['last_name'], request.json['password'])
    return user

def extractSign(request):
    # for joining so need user's email, location name, location address, and time slot
    s = Sign(request.json['email'], request.json['time_block'], request.json['location_name'], request.json['address'])
    return s

def extractCheck(request):
    c = Check(request.json['item_name'], request.json['location'], request.json['email'])
    return c

@app.route("/getUser", methods=['POST', 'OPTIONS'])
def getUser():
    if request.method == 'OPTIONS':
        return 'true'
    u = extractUser(request)
    global userDao
    return userDao.getUser(u)

@app.route("/signup", methods=['POST', 'OPTIONS'])
def insertUser():
    if request.method == 'OPTIONS':
        return 'true'
    u = extractUser(request)
    global userDao
    return userDao.insertUser(u)

@app.route('/getLocations', methods=['POST', 'OPTIONS'])
def getLocations():
    if request.method == 'OPTIONS':
        return 'true'
    global locationDao
    return locationDao.getLocations()

@app.route('/getReservations', methods=['POST', 'OPTIONS'])
def getReservations():
    if request.method == 'OPTIONS':
        return 'true'
    global reserveDao
    return reserveDao.getReservations()

@app.route('/joinReservation', methods=['POST', 'OPTIONS'])
def joinReservation():
    s = extractSign(request)
    global reserveDao
    return reserveDao.joinReservation(s)

@app.route('/getRegisteredReservations', methods=['POST', 'OPTIONS'])
def getRegisteredReservations():
    if request.method == 'OPTIONS':
        return 'true'
    global reserveDao
    return reserveDao.getSignups()

    
@app.route('/getItems', methods=['POST', 'OPTIONS'])
def getItems():
    if request.method == 'OPTIONS':
        return 'true'
    global itemDao
    return itemDao.getItems()

@app.route('/checkoutItem', methods=['POST', 'OPTIONS'])
def checkoutItem():
    if request.method == 'OPTIONS':
        return 'true'
    c = extractCheck(request)
    global itemDao
    return itemDao.checkoutItem(c)

# ----------------------- To DO ---------------------------





if __name__ == "__main__":
    app.run(debug =True, host='0.0.0.0', port='5000')

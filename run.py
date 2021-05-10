import sys
import os

from location import Location
from reservation import Reservation
from user import User
from item import Item
from sign import Sign
from check import Check

from userDao import UserDao

from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__) 
CORS(app)

userDao = UserDao()

def extract(request):
    user = User(request.json['email'], request.json['first_name'], request.json['last_name'], request.json['password'])
    return user

@app.route("/getUser", methods=['POST'])
def getUser():
    u = extract(request)
    global userDao
    return userDao.getUser(u)

@app.route("/signup", methods=['POST'])
def insertUser():
    u = extract(request)
    global userDao
    return userDao.insertUser(u)

if __name__ == "__main__":
    app.run(debug =True, host='0.0.0.0', port='5000')
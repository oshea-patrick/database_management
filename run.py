import sys
import os
from user import User
from userDao import UserDao
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__) 
CORS(app)

userDao = UserDao()

def extract(request):
    user = User(request.json['fname'], request.json['lname'], request.json['street'], request.json['city'], request.json['state'], request.json['zip'], request.json['phone'], request.json['email'], request.json['id'])
    return user

@app.route("/getAll", methods=['POST'])
def getAllUser():
    global userDao
    return userDao.getAllUsers()

@app.route("/get", methods=['POST'])
def getUser():
    u = extract(request)
    global userDao
    return userDao.getUser(u)

@app.route("/update", methods=['PATCH'])
def updateUser():
    u = extract(request)
    global userDao
    return userDao.updateUser(u)

@app.route("/delete", methods=['POST'])
def deleteUser():
    print(request.json)
    u = extract(request)
    global userDao
    return userDao.deleteUser(u)

@app.route("/insert", methods=['POST'])
def insertUser():
    u = extract(request)
    global userDao
    return userDao.insertUser(u)

if __name__ == "__main__":
    app.run(debug =True, host='0.0.0.0', port='5000')
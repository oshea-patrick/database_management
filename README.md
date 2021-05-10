# Welcome to our database final project

## To clone the repository

```
git clone https://github.com/oshea-patrick/database_management.git
```

## To install the required modules

```
cd database_management
npm i
```

## To start the project in your window (live reload)

```
npm start
```

## Stack implmentation
Frontend: Nodejs/React (hosted locally)
<br/>
Backend: Python3/Flask hosted at 18.221.103.54:5000
<br/>
Database: Oracle hosted at csc325spring2021.cjjvanphib99.us-west-2.rds.amazonaws.com:1521
<br/>

## API MEthods

URL: ENDPOINT/getUser
<br/>
METHOD: POST
<br/>
body : {
<br/>
    "email" : "",
<br/>
    "first_name" : "",
<br/>
    "last_name" : "",
<br/>
    "password" : ""
<br/>
}
<br/>
Response on Success: [true, {"email": "hpotter1@students.hogwarts.edu", "first_name": "Harry1", "last_name": "Potter", "password": "test"}]
<br/>
Response on Failure: [false, ""]

## Database Diagram

<img src='Capture.PNG' />

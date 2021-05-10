import cx_Oracle
from user import User
import json
class UserDao:

    def __init__(self):
        self.connection = None

    def disconnect(self):
        try:
            self.connection.close()
        except Exception as e:
            print(str(e))

    def connect(self):
        try:
            dsn_tns = cx_Oracle.makedsn(
                'csc325spring2021.cjjvanphib99.us-west-2.rds.amazonaws.com',
                '1521',
                service_name='ORCL')
            self.connection = cx_Oracle.connect(
                user="POSHEA1",
                password="csrocks55",
                dsn=dsn_tns
            )
        except Exception as e:
            print(str(e))
        print("Successfully connected!")

    def getAllUsers(self, u):
        self.connect()
        c = self.connection.cursor()
        c.execute('select * from POSHEA1."User"')
        a = []
        for row in c:
            temp = User('','','','','','','','', '')
            temp.adapt(row)
            a.append(temp.dictify())
        self.disconnect()
        return json.dumps(a)

    def getUser(self, u):
        self.connect()
        c = self.connection.cursor()
        c.execute('select * from POSHEA1."User" where email=' + "'" + u.email + "'")
        amount = 0
        first = None
        for row in c:
            first = row
            amount+=1
            break
        if (amount == 0):
            self.disconnect()
            return json.dumps([False, ""])
        else:
            temp = User('','','','','','','','', '')
            temp.adapt(first)
            self.disconnect()
            return json.dumps([True, temp.dictify()])

    def getAllUsers(self):
        self.connect()
        c = self.connection.cursor()
        c.execute('select * from POSHEA1."User"')
        out = []
        for row in c:
            temp = User('','','','','','','','', '')
            temp.adapt(row)
            out.append(temp.dictify())
        self.disconnect()
        return json.dumps(out)

    def insertUser(self, u):
        self.connect()
        c = self.connection.cursor()
        sql = 'INSERT INTO POSHEA1."User" '+ '(FNAME, LNAME, STREET, CITY, STATE, ZIP, PHONE, EMAIL, ID)'+ ' VALUES ('+ "'" + u.fname + "','" + u.lname + "','" + u.street + "','" + u.city + "','" + u.state +"','" + u.zip + "','" + u.phone + "','" + u.email + "'" + ",my_seq.nextval)"
        try:
            c.execute(sql)
            self.connection.commit()
            self.disconnect()
        except Exception as e:
            self.disconnect()
            return "Failed"
        return 'Success'

    def updateUser(self, u):
        self.connect()
        print(u.dictify())
        c = self.connection.cursor()
        sql = 'UPDATE POSHEA1."User" ' + "set fname='" + u.fname + "', lname='" + u.lname + "', street='" + u.street + "', city='" + u.city + "', state='" + u.state + "', zip='" + u.zip + "', phone='" + u.phone + "', email='" + u.email + "' where email='" + str(u.email) + "'"
        c.execute(sql)
        self.connection.commit()
        self.disconnect()
        return 'Success'

    def deleteUser(self, u):
        self.connect()
        c = self.connection.cursor()
        sql = 'DELETE FROM POSHEA1."User" where email=' + "'" +str(u.email) + "'"
        c.execute(sql)
        self.connection.commit()
        self.disconnect()
        return 'Success'
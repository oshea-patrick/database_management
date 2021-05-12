import cx_Oracle
from user import User
import json
class UserDao:

    def __init__(self):
        self.connection = None

    def disconnect(self):
        try:
            self.connection.close()
            print("Connection closed")
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

    def getUser(self, u):
        self.connect()
        c = self.connection.cursor()
        c.execute('select * from POSHEA1."USER" where email=' + "'" + u.email + "'")
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
            temp = User('','','','')
            temp.adapt(first)
            self.disconnect()
            return json.dumps([True, temp.dictify()])

    def insertUser(self, u):
        self.connect()
        c = self.connection.cursor()
        sql = 'INSERT INTO POSHEA1."USER" '+ '(EMAIL, FIRST_NAME, LAST_NAME, PASSWORD)'+ ' VALUES ('+ "'" + u.email + "','" + u.first_name + "','" + u.last_name + "','" + u.password + "')"
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
        sql = 'UPDATE POSHEA1."USER" ' + "set EMAIL='" + u.email + "', FIRST_NAME='" + u.first_name + "', LAST_NAME='" + u.last_name + "', PASSWORD='" + u.password + "' where email='" + str(u.email) + "'"
        c.execute(sql)
        self.connection.commit()
        self.disconnect()
        return 'Success'

    def deleteUser(self, u):
        self.connect()
        c = self.connection.cursor()
        sql = 'DELETE FROM POSHEA1."USER" where email=' + "'" +str(u.email) + "'"
        c.execute(sql)
        self.connection.commit()
        self.disconnect()
        return 'Success'

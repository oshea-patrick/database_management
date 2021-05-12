import cx_Oracle
from reservation import Reservation
from sign import Sign
import json
class ReserveDao:

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

    def getReservations(self):
        self.connect()
        try:
            c = self.connection.cursor()
            c.execute('select * from POSHEA1."RESERVATION"')
            a = []
            for row in c:
                temp = Reservation('','', 0)
                temp.adapt(row)
                a.append(temp.dictify())
            self.disconnect()
            return json.dumps(a)
        except:
            self.disconnect()
            return json.dumps([])

    def joinReservation(self, u):
        self.connect()
        c = self.connection.cursor()
        sql = 'INSERT INTO POSHEA1."SIGNS" '+ '(EMAIL, TIME_BLOCK, LOCATION_NAME, ADDRESS)'+ ' VALUES ('+ "'" + u.email + "','" + u.time_block + "','" + u.location_name + "','" + u.address + "')"
        try:
            c.execute(sql)
            self.connection.commit()
            self.disconnect()
        except Exception as e:
            self.disconnect()
            return "Failed"
        return 'Success'

    def getSignups(self):
        self.connect()
        try:
            c = self.connection.cursor()
            c.execute('select * from POSHEA1."SIGNS"')
            a = []
            for row in c:
                temp = Sign('','', '', '')
                temp.adapt(row)
                a.append(temp.dictify())
            self.disconnect()
            return json.dumps(a)
        except:
            self.disconnect()
            return json.dumps([])

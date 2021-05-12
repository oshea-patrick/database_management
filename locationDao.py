import cx_Oracle
from location import Location
import json
class LocationDao:

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

    def getLocations(self):
        self.connect()
        try:
            c = self.connection.cursor()
            c.execute('select * from POSHEA1."LOCATION"')
            a = []
            for row in c:
                temp = Location('','')
                temp.adapt(row)
                a.append(temp.dictify())
            self.disconnect()
            return json.dumps(a)
        except:
            self.disconnect()
            return json.dumps([])

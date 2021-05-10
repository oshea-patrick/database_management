import cx_Oracle
from item import Item
from check import Check
import json
class ItemDao:

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

    def getItems(self):
        self.connect()
        c = self.connection.cursor()
        c.execute('select * from POSHEA1."ITEM"')
        a = []
        for row in c:
            temp = Item('','', 0)
            temp.adapt(row)
            a.append(temp.dictify())
        self.disconnect()
        return json.dumps(a)

    def checkoutItem(self, j):
        self.connect()
        c = self.connection.cursor()
        sql = 'INSERT INTO POSHEA1."CHECK" '+ '(ITEM_NAME, LOCATION, EMAIL)'+ ' VALUES ('+ "'" + j.item_name + "','" + j.location + "','" + j.email + "')"
        try:
            c.execute(sql)
            self.connection.commit()
            self.disconnect()
        except Exception as e:
            self.disconnect()
            return "Failed"
        return 'Success'
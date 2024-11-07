import pymysql

dataBase = pymysql.connect(
    host = 'localhost',
    user = 'root',
    password = '199031552aaAA@@'
)

#prepare a cursor object
cursorObject = dataBase.cursor()

#create a datebase
cursorObject.execute("CREATE DATABASE dashboarddb")
print("All Done!")

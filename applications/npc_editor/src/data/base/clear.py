import os

with open('itemname.csv', 'r') as itemlist:
    for item in itemlist.readlines():
        try:
            itemline = item.split(',')
            itemid = itemline[0]
            if (int(itemid)):
                print(itemline[1])
        except:
            pass
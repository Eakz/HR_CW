# https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/python


def evaporator(content, evap_per_day, threshold):
    count=0
    limit = content*threshold/100
    while(content>limit):
        count+=1
        content=content-content*evap_per_day/100
    return count


print(evaporator(10, 10, 10))  # 22)

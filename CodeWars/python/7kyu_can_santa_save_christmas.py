# https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/python

def determine_time(arr):
    def getSeconds(s):
        [hours,minutes,seconds]=s.split(':')
        return int(hours)*3600+int(minutes)*60+int(seconds)
    return sum([getSeconds(j) for j in arr])<=24*3600



print(determine_time(["01:00:00", "02:30:00"]) , True)
print(determine_time(["01:00:00", "02:30:00", "22:00:00"]) , False)
print(determine_time(["12:00:00", "12:00:00"]) , True)
print(determine_time([]) , True)
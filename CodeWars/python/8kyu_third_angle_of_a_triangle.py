# https://www.codewars.com/kata/5a023c426975981341000014/train/python

def other_angle(a, b):
    return 180 -a -b


print(other_angle(30, 60), 90)
print(other_angle(60, 60), 60)
print(other_angle(43, 78), 59)
print(other_angle(10, 20), 150)
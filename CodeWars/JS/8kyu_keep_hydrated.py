# https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python

def litres(time):
    return time//2


print(litres(2), 1, 'should return 1 litre')
print(litres(1.4), 0, 'should return 0 litres')
print(litres(12.3), 6, 'should return 6 litres')
print(litres(0.82), 0, 'should return 0 litres')
print(litres(11.8), 5, 'should return 5 litres')
print(litres(1787), 893, 'should return 893 litres')
print(litres(0), 0, 'should return 0 litres')

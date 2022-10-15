# https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/python

from math import ceil


# def divisors(n):
#     if n==1: return 1
#     num=2;
#     for i in range(2,ceil(n/2)+1):
#         if n%i==0:
#             num+=1
#     return num;    


divisors = lambda n: len([i for i in range(2, int(n/2+1)) if n%i==0])+1 + (0 if n==1 else 1)

print(divisors(1), 1)
print(divisors(4), 3)
print(divisors(5), 2)
print(divisors(12), 6)
print(divisors(30), 8)
print(divisors(4096), 13)

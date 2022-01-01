# https://www.codewars.com/kata/617ae2c4e321cd00300a2ec6/train/python


from math import ceil

SQ = [x*x for x in range(1,32000)]
S = set(SQ)

def is_constructable(A):
    x = A**.5
    if not x%1: return True
    a=ceil(A/2)
    for s in SQ:
        if A-s in S: return True
        if s>a: return False


print(is_constructable([1, 2, 4, 5, 9, 10]),True)
print(is_constructable([3, 6, 7, 11, 12, 14]),True)

    
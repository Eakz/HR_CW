# https://www.codewars.com/kata/5eb9a92898f59000184c8e34


def sum_arrangements(num):
    s = str(num)
    from math import factorial
    return factorial(len(s)-1)*int("1"*len(s))*sum(int(i) for i in s)
    
print(sum_arrangements(123))  # 1332
print(sum_arrangements(1185))  # 99990

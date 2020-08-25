# https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem


def evenFib(n):
    a, b = 1, 2
    sum = 0
    while(a <= n):
        sum += a if a % 2 == 0 else 0
        a, b = b, a+b
    return sum

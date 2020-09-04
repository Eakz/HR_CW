# https://www.hackerrank.com/contests/projecteuler/challenges/euler004/problem

def isPal(n):
    n = str(n)
    return n == n[::-1]


def larPal(n):
    pals = []
    for i in range(99, int(n**0.5)+10):
        for j in range(999, int(n**0.5)-10, -1):
            product = i*j
            if isPal(product) and product < n:
                pals.append(product)
    return sorted(pals)[-1]


print(larPal(101111))

# https://www.hackerrank.com/contests/projecteuler/challenges/euler003/problem


def l_p_n(n):
    d = 2
    while d <= int(n**0.5):
        if n % d == 0:
            n /= d
        else:
            d += 1
    return int(n)

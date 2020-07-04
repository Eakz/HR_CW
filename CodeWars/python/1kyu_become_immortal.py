# https://www.codewars.com/kata/59568be9cc15b57637000054/solutions/python
def elder_age(m, n, l, t):
    S = lambda x: x * (x-1) // 2 if x > 1 else 0
    D = lambda x,y: (S(y-l) - S(x-l)) % t

    if m < n: m, n = n, m
    if n == 1: return D(0, m)
    x = 1 << (m.bit_length()-1)
    res = D(0, x) * min(x, n)
    if m > x:
        if n > x:
            res += D(x, 2*x) * (m+n-2*x)
            res += elder_age(m-x, n-x, l, t)
        else:
            res += elder_age(m-x, n, l-x, t)
    return res % t
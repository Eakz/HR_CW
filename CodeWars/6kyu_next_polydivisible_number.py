# Given a non-negative number, return the next bigger polydivisible
# number, or an empty value like null or Nothing.


# A number is polydivisible if its first digit is cleanly divisible
# by 1, its first two digits by 2, its first three by 3, and so on.
# There are finitely many polydivisible numbers.
# def is_polydivisible(n):
#     while True:
#         if n % len(str(n)) != 0:
#             return False
#         if n == 0:
#             break
#         n = n // 10
#     return True


# def next_num(n):
#     if n == 0:
#         return 1
#     n += 1
#     while True:
#         if is_polydivisible(n):
#             return n
#         n += 1

import requests
from bisect import bisect

MAGIC = [int(x) for x in requests.get("https://oeis.org/b144688.txt").text.split()[1::2]]

def next_num(n):
    return MAGIC[bisect(MAGIC, n)] if n < MAGIC[-1] else None


d, polydivisible, arr = 1, [], list(range(1, 10))
while arr:
    d += 1
    polydivisible.extend(arr)
    arr = [n for x in arr for n in
           range(-(-x*10 // d) * d, (x+1) * 10, d)]

def next_num(n):
    from bisect import bisect
    idx = bisect(polydivisible, n)
    if idx < len(polydivisible):
        return polydivisible[idx]

# print(next_num(0))  # 1)
# print(next_num(10))  # 12)
# print(next_num(11))  # 12)
# print(next_num(1234))  # 1236)
# print(next_num(123220))  # 123252)

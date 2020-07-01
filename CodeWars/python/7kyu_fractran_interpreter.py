# https://www.codewars.com/kata/5ebae674014091001729a9d7/train/python

from fractions import Fraction

def fractran(code: str, n: int) -> int:
    F = list(map(Fraction, code.split()))
    for _ in range(1000):
        x = next((n*f for f in F if n % f.denominator == 0), None)
        if x is None: break
        n = x
    return n
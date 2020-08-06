#!/bin/python3

import sys


t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    mul3 = (n - 1) // 3
    mul5 = (n - 1) // 5
    mul15 = (n - 1) // 15
    sum = (3 * mul3 * (mul3 + 1) // 2
           + 5 * mul5 * (mul5 + 1) // 2
           - 15 * mul15 * (mul15 + 1) // 2)
    print(sum)

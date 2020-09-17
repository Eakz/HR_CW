# https://www.hackerrank.com/challenges/30-arrays/problem
#!/bin/python3

import math
import os
import random
import re
import sys


def solution(a):
    return ' '.join(map(str, reversed(a)))


if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))
    print(solution(arr))

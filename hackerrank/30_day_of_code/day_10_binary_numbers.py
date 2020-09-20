# https://www.hackerrank.com/challenges/30-binary-numbers/problem


#!/bin/python3

import math
import os
import random
import re
import sys


def toBinary(n):
    st = bin(n)[2:]
    return len(max(st.split('0')))


if __name__ == '__main__':
    n = int(input())
    print(toBinary(n))

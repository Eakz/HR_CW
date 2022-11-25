#!/bin/python3

import math
import os
import random
import re
import sys


def mul(n):
    [print(f"{n} x {i} = {n*i}") for i in range(1, 11)]


if __name__ == '__main__':
    n = int(input())
    mul(n)

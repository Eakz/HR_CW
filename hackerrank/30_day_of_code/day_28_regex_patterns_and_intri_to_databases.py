#!/bin/python3

import math
import os
import random
import re
import sys


def sortGmail(l): return '\n'.join(
    sorted([i[0] for i in l if re.match(r".+@gmail\.com", i[1])]))


if __name__ == '__main__':
    N = int(input())
    data = []
    for N_itr in range(N):
        firstNameEmailID = input().split()
        data.append(firstNameEmailID)

    print(sortGmail(data))

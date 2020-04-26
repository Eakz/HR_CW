# https://www.hackerrank.com/challenges/minimum-time-required/problem
import math


def minTime(machines, goal):
    mi_d = math.ceil(goal / (len(machines) / min(machines)))
    ma_d = math.ceil(goal / (len(machines) / max(machines)))
    while mi_d < ma_d:
        day = (mi_d + ma_d) // 2
        if sum(day // i for i in machines) >= goal:
            ma_d = day
        else:
            mi_d = day + 1
    return mi_d

# https://www.hackerrank.com/challenges/frequency-queries/problem

from collections import defaultdict

def freqQuery(queries):
    arr = defaultdict(int)
    frequencies = defaultdict(int)
    result = []
    for i in range(len(queries)):
        command, value = queries[i]
        if command == 1:
            arr[value] += 1
            frequencies[arr[value]] += 1
            frequencies[arr[value] - 1] -= 1
        if command == 2 and arr[value] != 0:
            arr[value] -= 1
            frequencies[arr[value]] += 1
            frequencies[arr[value] + 1] -= 1
        if command == 3:
            result.append(1 if frequencies[value] > 0 else 0)
    return result
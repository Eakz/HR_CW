#!/bin/python3
import os

# Complete the makeAnagram function below.


def makeAnagram(a, b):
    order = (a, b) if len(a) > len(b) else (b, a)
    string, other = order
    other = [*other]
    other_copy = other[:]
    result = []
    count = 0
    for i in string:
        if(i in other):
            result.append(other.pop(other.index(i)))
        else:
            count += 1
    return count+len(other_copy)-len(result)


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    a = input()

    b = input()

    res = makeAnagram(a, b)

    fptr.write(str(res) + '\n')

    fptr.close()

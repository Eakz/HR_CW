# https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python

# Recursion method
def compute_sum(n, s=0):
    if n == 0:
        return s
    return compute_sum(n-1, s+sum([*map(lambda x:int(x), [*str(n)])]))

# Straight forward method


def compute_sum(n):
    return sum(int(num) for i in range(1, n+1) for num in str(i))


# print(compute_sum(1), 1)
# print(compute_sum(2), 3)
# print(compute_sum(3), 6)
# print(compute_sum(4), 10)
print(compute_sum(10), 46)
# print(compute_sum(12), 51)

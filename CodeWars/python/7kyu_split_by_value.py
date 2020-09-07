# https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc/train/python


def split_by_value(k, elements):
    left = [i for i in elements if i < k]
    right = [i for i in elements if i >= k]
    return [*left, *right]


def split_by_value(k, elements):
    return sorted(elements, key=lambda x: x >= k)


print(split_by_value(5, [1, 3, 5, 7, 6, 4, 2]), [1, 3, 4, 2, 5, 7, 6])
print(split_by_value(0, [5, 2, 7, 3, 2]), [5, 2, 7, 3, 2])
print(split_by_value(6, [6, 4, 10, 10, 6]), [4, 6, 10, 10, 6])

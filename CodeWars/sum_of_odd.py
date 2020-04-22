# Given the triangle of consecutive odd numbers:
#
#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
#
# Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
#
# row_sum_odd_numbers(1); # 1
# row_sum_odd_numbers(2); # 3 + 5 = 8


def row_sum_odd_numbers(n):
    start = sum([i for i in range(n + 1)]) * 2 - 1
    # print([i for i in range(start,start-n*2,-2)])
    return sum([i for i in range(start, start - n * 2, -2)])


def row_sum_odd_numbers(n):
    return n**3


print(row_sum_odd_numbers(1))  #, 1)
print(row_sum_odd_numbers(2))  #, 8)
print(row_sum_odd_numbers(3))
print(row_sum_odd_numbers(4))
print(row_sum_odd_numbers(5))
print(row_sum_odd_numbers(13))  #, 2197)
print(row_sum_odd_numbers(19))  #, 6859)
print(row_sum_odd_numbers(41))  #, 68921)

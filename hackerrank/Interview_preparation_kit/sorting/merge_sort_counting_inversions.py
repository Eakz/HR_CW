# In an array, , the elements at indices and (where ) form an
#  inversion if . In other words, inverted elements and

# are considered to be "out of order". To correct an inversion,
#  we can swap adjacent elements.

# For example, consider the dataset
# . It has two inversions: and

# . To sort the array, we must perform the following two swaps
#  to correct the inversions:

# Given

# datasets, print the number of inversions that must be swapped
#  to sort each dataset on a new line.

# Function Description

# Complete the function countInversions in the editor below.
#  It must return an integer representing the number of inversions
#   required to sort the array.

# countInversions has the following parameter(s):

#     arr: an array of integers to sort .

# Input Format

# The first line contains an integer,

# , the number of datasets.

# Each of the next

# pairs of lines is as follows:

#     The first line contains an integer,

# , the number of elements in
# .
# The second line contains
# space-separated integers,

#     .

# Constraints

# Output Format

# For each of the

# datasets, return the number of inversions that must be swapped
#  to sort the dataset.

# Sample Input

# 2
# 5
# 1 1 1 2 2
# 5
# 2 1 3 1 2

# Sample Output

# 0
# 4

# Explanation

# We sort the following

# datasets:

# is already sorted, so there are no inversions for us to correct.
#  Thus, we print
# on a new line.
# We performed a total of swaps to correct inversions.


def countInversions(arr):
    n = len(arr)
    if n == 1:
        return 0
    n1 = int(n / 2)
    n2 = n - n1
    arr1 = arr[:n1]
    arr2 = arr[n1:]
    ans = countInversions(arr1) + countInversions(arr2)
    i1 = 0
    i2 = 0
    for i in range(n):
        if i1 < n1 and (i2 >= n2 or arr1[i1] <= arr2[i2]):
            arr[i] = arr1[i1]
            ans += i2
            i1 += 1
        elif i2 < n2:
            arr[i] = arr2[i2]
            i2 += 1
    return ans

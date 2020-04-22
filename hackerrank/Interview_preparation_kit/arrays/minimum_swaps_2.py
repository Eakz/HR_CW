# You are given an unordered array consisting of consecutive integers

# [1, 2, 3, ..., n] without any duplicates. You are allowed to swap
# any two elements. You need to find the minimum number of swaps
#  required to sort the array in ascending order.

# For example, given the array

# we perform the following steps:

# i   arr                         swap (indices)
# 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
# 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
# 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
# 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
# 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
# 5   [1, 2, 3, 4, 5, 6, 7]

# It took

# swaps to sort the array.

# Function Description

# Complete the function minimumSwaps in the editor below. It must return
#  an integer representing the minimum number of swaps to sort the array.

# minimumSwaps has the following parameter(s):

#     arr: an unordered array of integers

# Input Format

# The first line contains an integer,
# , the size of .
# The second line contains space-separated integers

# .

# Constraints

# Output Format

# Return the minimum number of swaps to sort the given array.

# Sample Input 0

# 4
# 4 3 1 2

# Sample Output 0

# 3

# Explanation 0

# Given array

# After swapping we get
# After swapping we get
# After swapping we get
# So, we need a minimum of

# swaps to sort the array in ascending order.

# Sample Input 1

# 5
# 2 3 4 1 5

# Sample Output 1

# 3

# Explanation 1

# Given array

# After swapping we get
# After swapping we get
# After swapping we get
# So, we need a minimum of

# swaps to sort the array in ascending order.

# Sample Input 2

# 7
# 1 3 5 2 4 6 7

# Sample Output 2

# 3

# Explanation 2

# Given array

# After swapping we get
# After swapping we get
# After swapping we get
# So, we need a minimum of swaps to sort the array in ascending order.

# Python3 program to find  minimum number
# of swaps required to sort an array


# Function returns the minimum
# number of swaps required to sort the array
def minimumSwaps(arr):
    n = len(arr)

    # Create two arrays and use
    # as pairs where first array
    # is element and second array
    # is position of first element
    arrpos = [*enumerate(arr)]

    # Sort the array by array element
    # values to get right position of
    # every element as the elements
    # of second array.
    arrpos.sort(key=lambda it: it[1])
    print(arrpos)

    # To keep track of visited elements.
    # Initialize all elements as not
    # visited or false.
    vis = {k: False for k in range(n)}

    # Initialize result
    ans = 0
    for i in range(n):

        # alreadt swapped or
        # alreadt present at
        # correct position
        if vis[i] or arrpos[i][0] == i:
            continue

        # find number of nodes
        # in this cycle and
        # add it to ans
        cycle_size = 0
        j = i
        while not vis[j]:

            # mark node as visited
            vis[j] = True

            # move to next node
            j = arrpos[j][0]
            cycle_size += 1

        # update answer by adding
        # current cycle
        if cycle_size > 0:
            ans += (cycle_size - 1)
    # return answer
    return ans


# Driver Code
arr = [1, 5, 4, 3, 2]
print(minimumSwaps(arr))

# This code is contributed
# by Dharan Aditya

print(minimumSwaps([4, 3, 1, 2]))  # 3
print(minimumSwaps([2, 3, 4, 1, 5]))  # 3
print(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))  # 3
# print(minimumSwaps([7, 1, 3, 2, 4, 5, 6]))  # 5

# Write a function that accepts two arguments: 
# an array/list of integers and another integer (n).

# Determine the number of times where two integers 
# in the array have a difference of n.

# For example:

# [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
# [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
def int_diff(arr, n):
    return len([i for na,i in enumerate(arr) for nz,b in enumerate(arr) if abs(i-b)==n and na!=nz])//2

# def int_diff(arr,n):
#     return len(list(map(lambda x: x,arr)))
# Nice codewars snippet

# int_diff=lambda l,n:sum(n==abs(a-b)for i,a in enumerate(l)for b in l[:i])
print(int_diff([1, 1, 5, 6, 9, 16, 27], 4))#, 3)
print(int_diff([1, 1, 3, 3], 2))#, 4)
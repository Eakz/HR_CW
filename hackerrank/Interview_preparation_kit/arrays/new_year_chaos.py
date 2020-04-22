# It's New Year's Day and everyone's in line for the Wonderland rollercoaster
# ride! There are a number of people queued up, and each person wears a sticker
# indicating their initial position in the queue. Initial positions increment
# by from at the front of the line to

# at the back.

# Any person in the queue can bribe the person directly in front of them to
#  swap positions. If two people swap positions, they still wear the same
#  sticker denoting their original places in line. One person can bribe
#  at most two others. For example, if
# and bribes , the queue will look like this:

# .

# Fascinated by this chaotic queue, you decide you must know the minimum
#  number of bribes that took place to get the queue into its current state!

# Function Description

# Complete the function minimumBribes in the editor below. It must print
#  an integer representing the minimum number of bribes necessary, or Too
#  chaotic if the line configuration is not possible.

# minimumBribes has the following parameter(s):

#     q: an array of integers

# Input Format

# The first line contains an integer

# , the number of test cases.

# Each of the next
# pairs of lines are as follows:
# - The first line contains an integer , the number of people in the queue
# - The second line has

# space-separated integers describing the final state of the queue.

# Constraints

# Subtasks

# For
# score
# For score

# Output Format

# Print an integer denoting the minimum number of bribes needed to get
#  the queue into its final state. Print Too chaotic if the state is
#  invalid, i.e. it requires a person to have bribed more than

# people.

# Sample Input

# 2
# 5
# 2 1 5 3 4
# 5
# 2 5 1 3 4

# Sample Output

# 3
# Too chaotic

# Explanation

# Test Case 1

# The initial state:

# [pic1(1).png]

# After person
# moves one position ahead by bribing person

# :

# [pic2.png]

# Now person
# moves another position ahead by bribing person

# :

# [pic3.png]

# And person
# moves one position ahead by bribing person

# :

# [pic5.png]

# So the final state is

# after three bribing operations.

# Test Case 2

# No person can bribe more than two people, so its not possible to achieve
#  the input state.
import math

# def minimumBribes(q):
#     movements = [abs(q.index(i)-sorted(q).index(i)) for i in q]
#     print('Too chaotic' if max(movements)>2 else math.ceil(len(movements)/2))
#     movements=[]

# def minimumBribes(q):
#     movements = [abs(q.index(i)-sorted(q).index(i)) for i in q]
#     if max(movements)>2:
#         return 'Too chaotic'
#     else:
#         return ceil(len(movements)/2)
# def minimumBribes(q):
#     movements = [abs(q.index(i) - sorted(q).index(i)) for i in q]
#     # print(movements)
#     # if max(movements) > 2 and max(movements) %2 == 0:
#     #     maxim =movements.pop(movements.index(max(movements)))
#     #     movements+=[1 for i in range(maxim*2)]
#     print('arr = ',q)
#     print('Too chaotic' if max(movements)>2 else math.ceil(len(movements) / 2))
#     print(movements)
#     print(sum(movements),' sum')

# def minimumBribes(q):
#     count = 0
#     for i in range(1, len(q) - 2):
#         left = abs(q[i] - q[i - 1]) + (1 if q[i] != sorted(q)[i] else 0)
#         right = abs(q[i] - q[i + 1])
#         if (left > 2 and right > 2) and (right not in [q[i],
#                 q[i - 1], q[i + 1]
#         ] and left not in [q[i],q[i - 1], q[i + 1]]):
#             print('Too chaotic')
#             return
#         elif left > 1:
#             count += 1
#     if len(q) % 2 != 0:
#         count += 1
#     print(count)


def minimumBribes(q):
    count = 0
    for pos, val in enumerate(q):
        if val - pos - 1 > 2:
            print("Too chaotic")
            return
        for b in range(max(0, val - 2), pos):
            if q[b] > val:
                count += 1
    print(count)


'''            1, 2, 3, 4, 5'''
# minimumBribes([2, 1, 5, 3, 4])  # 3
# minimumBribes([2, 5, 1, 3, 4])  # Too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])  # 7
# minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])  # 4

# nums = [2, 1, 5, 3, 4]
# print("PRE SORT: {0}".format(nums))

# def swap(arr, index_1, index_2):
#     temp = arr[index_1]
#     arr[index_1] = arr[index_2]
#     arr[index_2] = temp

# def bubble_sort_unoptimized(arr):
#     iteration_count = 0
#     for el in arr:
#         iteration_count += 1
#         for index in range(len(arr) - 1):

#             if arr[index] > arr[index + 1]:
#                 swap(arr, index, index + 1)

#     print("PRE-OPTIMIZED ITERATION COUNT: {0}".format(iteration_count))

# def bubble_sort(arr):
#     iteration_count = 0
#     for i in range(len(arr)):
#         iteration_count += 1
#         # iterate through unplaced elements
#         for idx in range(len(arr) - i - 1):

#             if arr[idx] > arr[idx + 1]:
#                 # replacement for swap function
#                 arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]

#     print("POST-OPTIMIZED ITERATION COUNT: {0}".format(iteration_count))

# bubble_sort([2, 1, 5, 3, 4]) # 3
# bubble_sort_unoptimized([2, 1, 5, 3, 4])
# bubble_sort([2, 5, 1, 3, 4]) # chaotic
# bubble_sort_unoptimized([2, 5, 1, 3, 4])
# bubble_sort([1, 2, 5, 3, 7, 8, 6, 4]) # 7
# bubble_sort_unoptimized([1, 2, 5, 3, 7, 8, 6, 4])
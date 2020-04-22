# Emma is playing a new mobile game that starts with consecutively
#  numbered clouds. Some of the clouds are thunderheads and others
#   are cumulus. She can jump on any cumulus cloud having a number
#    that is equal to the number of the current cloud plus or

# . She must avoid the thunderheads. Determine the minimum number
#  of jumps it will take Emma to jump from her starting postion
#   to the last cloud. It is always possible to win the game.

# For each game, Emma will get an array of clouds numbered
# if they are safe or if they must be avoided. For example,
#  indexed from . The number on each cloud is its index in
#   the list so she must avoid the clouds at indexes and.
#    She could follow the following two paths: or . The first path
#     takes jumps while the second takes

# .

# Function Description

# Complete the jumpingOnClouds function in the editor below.
#  It should return the minimum number of jumps required, as an integer.

# jumpingOnClouds has the following parameter(s):

#     c: an array of binary integers

# Input Format

# The first line contains an integer
# , the total number of clouds. The second line contains space-separated
#  binary integers describing clouds where

# Constraints

# Output Format

# Print the minimum number of jumps needed to win the game.


def jumpingOnClouds(c, count=0):
    if len(c) == 2:
        return count + 1
    if len(c) <= 2:
        return count
    if len(c) > 2:
        if c[0] == 0 and c[2] == 0:
            count += 1
            return jumpingOnClouds(c[2:], count)
        elif c[0] == 0 and c[1] == 0:
            count += 1
            return jumpingOnClouds(c[1:], count)


# print(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))  # 4
# print(jumpingOnClouds([0, 0, 0, 0, 1, 0]))  # 3
print(jumpingOnClouds([0, 0, 0, 1, 0, 0]))  # 3

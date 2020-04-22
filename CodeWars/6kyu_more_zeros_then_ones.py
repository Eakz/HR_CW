# Create a moreZeros function which will receive a string for input,
#  and return an array (or null terminated string in C) containing only
#   the characters from that string whose binary representation of its ASCII
#    value consists of more zeros than ones.

# You should remove any duplicate characters, keeping the first occurence
#  of any such duplicates, so they are in the same order in the final array
#   as they first appeared in the input string.

# Examples

# 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
#                True       True       False      True       False

#         --> ['a','b','d']

# 'DIGEST'--> ['D','I','E','T']
from collections import Counter


def more_zeros(s):
    result = [
        i for i in s if Counter(bin(ord(i)).lstrip('0b'))['0'] >
        len(bin(ord(i)).lstrip('0b')) // 2
    ]
    toreturn = []
    for i in result:
        if i not in toreturn:
            toreturn.append(i)
    return toreturn


# @test.it("Basic tests")
# def basic():
print(more_zeros('abcde'))  # ['a', 'b', 'd'])
print(more_zeros(
    'thequickbrownfoxjumpsoverthelazydog'))  # ['h', 'b', 'p', 'a', 'd'])
print(
    more_zeros('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG')
)  # ['T', 'H', 'E', 'Q', 'I', 'C', 'B', 'R', 'F', 'X', 'J', 'P', 'L', 'A', 'D'])
print(
    more_zeros(
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_')
)  # ['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0'])
print(more_zeros('DIGEST'))  # ['D', 'I', 'E', 'T'])
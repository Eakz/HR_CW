# Complete the function scramble(str1, str2) that returns true if a portion of
# str1 characters can be rearranged to match str2, otherwise returns false.
#
# Notes:
#
#     Only lower case letters will be used (a-z). No punctuation or digits will
# be included.
#     Performance needs to be considered
#
# Input strings s1 and s2 are null terminated.
#
# Examples
#
# scramble('rkqodlw', 'world') ==> True
# scramble('cedewaraaossoqqyt', 'codewars') ==> True
# scramble('katas', 'steak') ==> False
#

True


# def scramble(s1, s2):
#     for letter in s2:
#         if letter in s1 and s2.count(letter) <= s1.count(letter):
#             continue
#         else:
#             return False
#     return True

# def scramble(s1, s2):
#     b = [i for i in s2 if s2.count(i) > 1]
#     return ''.join([i for i in s2 if i in s1]) == s2 and all(map(lambda x: s1.count(x) == s2.count(x), b))


# def scramble(s1, s2):
#     s1 = list(s1)
#     return ''.join([s1.pop(s1.index(i)) for i in s2 if i in s1]) == s2
#
#
# def scramble(s1, s2):
#     doubles = []
#     for letter in s2:
#         if letter in s1 and letter not in doubles:
#             doubles.append(letter)
#         elif letter in s1 and letter in doubles:
#             if s1.count(letter) != s2.count(letter):
#                 return False
#         else:
#             return False
#     return True
# def scramble(s1, s2):
#      s1, s2 = list(s1), list(s2)
#      for i in s2:
#         if i in s1:
#              s1.remove(i)
#         else:
#             return False
#      return True
# def scramble(s1,s2):
#     return all(i in s1 for i in set(s2)) and all(s1.count(i)==s2.count(i) for i in s2 if s2.count(i)>1)

def scramble(s1,s2):
    for c in set(s2):
        if s1.count(c) < s2.count(c):
            return False
    return True

from collections import Counter
def scramble(s1,s2):
    # Counter basically creates a dictionary of counts and letters
    # Using set subtraction, we know that if anything is left over,
    # something exists in s2 that doesn't exist in s1
    return len(Counter(s2)- Counter(s1)) == 0

def scramble(s1, s2):
    return not any(s1.count(char) < s2.count(char) for char in set(s2))


print(scramble('rkqodlw', 'world'))
print(scramble('cedewaraaossoqqyt', 'codewars'))
print(scramble('katas', 'steak'))
print(scramble('scriptjava', 'javascript'))
print(scramble('scriptingjava', 'javascript'))

# Given a string, capitalize the letters that occupy even
#  indexes and odd indexes separately, and return as shown
#  below. Index 0 will be considered even.
#
# For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
#    See test cases for more examples.
#
# The input will be a lowercase string with no spaces.
#
# Good luck!


def capitalize(s):
    answer = ''.join([
        i.upper() if n % 2 == 0 and i.isalpha() else i for n, i in enumerate(s)
    ])
    return [answer, answer.swapcase()]


print(capitalize('Pavlo Piliuiko'))

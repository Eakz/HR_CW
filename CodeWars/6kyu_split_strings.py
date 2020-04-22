# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
#
# Examples:
#
# solution('abc') # should return ['ab', 'c_']
# solution('abcdef') # should return ['ab', 'cd', 'ef']


def solution(s):
    return [
        f'{s[i]}{s[i+1]}'
        for i in range(0,
                       len(s) if len(s) % 2 == 0 else len(s) - 1, 2)
    ] + ([f'{s[-1]}_'] if len(s) % 2 != 0 else [])

import re

def solution(s):
    return re.findall(".{2}", s + "_")

print(solution("asdfadsf"))  # ['as', 'df', 'ad', 'sf']),
print(solution("asdfads"))  # ['as', 'df', 'ad', 's_']),
# print(solution(""))  # [])
# print(solution("x"))  #, ["x_"]),

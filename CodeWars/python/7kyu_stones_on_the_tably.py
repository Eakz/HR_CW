# https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/python

def solution(s):
    return sum([1 for i in range(1, len(s)) if s[i] == s[i-1]])


print(solution("RGBRGBRGGB"), ' === ', 1)
print(solution("RGGRGBBRGRR"), ' === ', 3)
print(solution("RRRRGGGGBBBB"), ' === ', 9)

# https://www.hackerrank.com/challenges/two-strings/problem

def twoStrings(s1, s2):
    return 'YES' if set(s1) & set(s2) !=set() else 'NO'
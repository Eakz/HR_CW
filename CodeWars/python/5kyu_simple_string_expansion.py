# https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5/train/python
import re


def solve(s):
    reg = r"[0-9]*\([A-Za-z]+\)"
    search = re.search(reg, s)

    if not search:
        return s
    search = search.span()
    start, end = search
    number, string = s[int(start):int(end)].split('(')
    return solve(s[0:int(start)]+int(number or 1)*string.strip(")")+s[int(end):])


print(solve("3(ab)"), "ababab")
print(solve("2(a3(b))"), "abbbabbb")
print(solve("3(b(2(c)))"), "bccbccbcc")
print(solve("k(a3(b(a2(c))))"), "kabaccbaccbacc")

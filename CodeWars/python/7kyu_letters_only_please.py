# https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d/train/python
import re


def remove_chars(s):
    return ''.join(re.findall(r"[A-Za-z\s]{1}", s))


print(remove_chars("test for error!"), "test for error")
print(remove_chars(".tree1"), 'tree')

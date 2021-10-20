# https://www.codewars.com/kata/544675c6f971f7399a000e79/train/python

def string_to_number(s):
    return eval(str(s))




print(string_to_number("1234"), 1234)
print(string_to_number("605"), 605)
print(string_to_number("1405"), 1405)
print(string_to_number("-7"), -7)

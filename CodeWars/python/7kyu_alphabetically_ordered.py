# https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/python

def alphabetic(s):
    return "".join(sorted([*s]))==s


test = [('asd', False), ('codewars', False),
        ('door', True), ('cell', True), ('z', True)]


def output(a, b):
    print(alphabetic(a), end=" - "), print(b)
    return


[output(a, b) for (a, b) in test]

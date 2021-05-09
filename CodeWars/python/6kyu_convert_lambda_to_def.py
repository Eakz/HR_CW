# https://www.codewars.com/kata/605d25f4f24c030033da9afb/train/python
# No lib solution
def convert_lambda_to_def(string):
    a=string.split(' = ')
    name=a[0]
    b=a[1].split(': ')
    var=b[0].split(' ')[1]
    retrn=b[1]
    return f"def {name}({var}):\n    return {retrn}"
# Regex lib 
from re import compile
def convert_lambda_to_def(string):
    from re import compile

    REGEX = compile(r"(.+) = lambda (.+): (.+)").search
    
    name, args, body = REGEX(string).groups()
    return f"def {name}({args}):\n    return {body}"

import codewars_test as test

@test.describe("Example Tests")
def example_tests():
    test.assert_equals(convert_lambda_to_def("func = lambda a: a * 2"), "def func(a):\n    return a * 2")
    test.assert_equals(convert_lambda_to_def("somes = lambda s: s + 1"), "def somes(s):\n    return s + 1")
    test.assert_equals(convert_lambda_to_def("act = lambda h: h + ' ' + 'i'"), "def act(h):\n    return h + ' ' + 'i'")
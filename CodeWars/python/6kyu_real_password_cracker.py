# https://www.codewars.com/kata/59146f7b4670ba520900000a/train/python
import codewars_test as test

"""Solution"""
from hashlib import sha1
from itertools import product


def password_cracker(hash):
    letters = ['', *map(lambda x:chr(x), range(97, 123))]
    for i in product(letters, repeat=5):
        if(sha1(''.join(i).encode()).hexdigest() == hash):
            return ''.join(i)


test.assert_equals(password_cracker(
    'e6fb06210fafc02fd7479ddbed2d042cc3a5155e'), 'code')
test.assert_equals(password_cracker(
    'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3'), 'test')

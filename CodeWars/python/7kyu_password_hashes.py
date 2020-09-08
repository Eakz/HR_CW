# https://www.codewars.com/kata/54207f9677730acd490000d1/train/python
import codewars_test as Test

from hashlib import md5


def pass_hash(str):
    return md5(str.encode()).hexdigest()


Test.describe("Basic tests")
Test.assert_equals(pass_hash('password'), '5f4dcc3b5aa765d61d8327deb882cf99')
Test.assert_equals(pass_hash('abc123'), 'e99a18c428cb38d5f260853678922e03')

# https://www.codewars.com/kata/5f47e79e18330d001a195b55/train/python
def base_finder(l):
    return len(set(''.join(l)))

import codewars_test as test


test.assert_equals(base_finder(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']), 10)
test.assert_equals(base_finder(['1', '2', '3', '4', '5', '6', '10', '11', '12', '13']), 7)
# https://www.codewars.com/kata/5f849ab530b05d00145b9495/train/python

import codewars_test as test


def flip(d, a):
    def r(a):
        return [sorted(e) for e in a]

    def l(a):
        return [list(reversed(sorted(e))) for e in a]

    def ud(f):
        def empty(a):
            return list(map(lambda x: list(x), zip(*f([list(i) for i in zip(*a)]))))
        return empty

    action = {"R": r, "L": l, 'U': ud(l), "D": ud(r)}
    return action[d](a)


@ test.describe("Fixed tests")
def test_group_1():
    box = [[1, 3, 2],
           [4, 5, 1],
           [6, 5, 3],
           [7, 2, 9]]

    @ test.it("Test 1")
    def test_1():
        test.assert_equals(flip('R', box), [[1, 2, 3],
                                            [1, 4, 5],
                                            [3, 5, 6],
                                            [2, 7, 9]])

    @ test.it("Test 2")
    def test_2():
        test.assert_equals(flip('L', box), [[3, 2, 1],
                                            [5, 4, 1],
                                            [6, 5, 3],
                                            [9, 7, 2]])

    @ test.it("Test 3")
    def test_3():
        test.assert_equals(flip('U', box), [[7, 5, 9],
                                            [6, 5, 3],
                                            [4, 3, 2],
                                            [1, 2, 1]])

    @ test.it("Test 4")
    def test_4():
        test.assert_equals(flip('D', box), [[1, 2, 1],
                                            [4, 3, 2],
                                            [6, 5, 3],
                                            [7, 5, 9]])


box = [[1, 3, 2],
       [4, 5, 1],
       [6, 5, 3],
       [7, 2, 9]]

print(flip('U', box))

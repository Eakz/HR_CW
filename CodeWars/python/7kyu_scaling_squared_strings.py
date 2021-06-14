# https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/python
import codewars_test as test

# Yes, sorry. Readability is not my forte
def scale(strng, k, n):
    return '\n'.join(['\n'.join([''.join([j*k for j in i]) for _ in range(n)]) for i in strng.split('\n')]).strip()


def testing(actual, expected):
    test.assert_equals(actual, expected)


test.describe("scale")
test.it("Basic tests")
a = "abcd\nefgh\nijkl\nmnop"
r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
testing(scale(a, 2, 3), r)
testing(scale("", 5, 5), "")
testing(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH")

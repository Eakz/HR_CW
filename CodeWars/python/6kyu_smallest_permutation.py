# https://www.codewars.com/kata/5fefee21b64cc2000dbfa875/train/python
import codewars_test as test


def min_permutation(n):
    sign = -1 if n < 0 else 1
    st = "".join(sorted(str(abs(n))))
    n = st.count("0")
    st = st.replace('0', '')
    return int(st[:1] + "0" * n + st[1:]) * sign


def testing(n, res):
    test.assert_equals(min_permutation(n), res)


@test.describe("Sample tests")
def sampleTests():
    @test.it("Should return permutation with smallest abs()")
    def _():
        testing(-20, -20)
        testing(-32, -23)
        testing(0, 0)
        testing(10, 10)
        testing(29394, 23499)

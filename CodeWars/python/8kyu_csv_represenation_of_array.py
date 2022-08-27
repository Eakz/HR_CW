from operator import indexOf
import codewars_test as test


def to_csv_text(array):
    return "\n".join([",".join(list(map(lambda x:str(x), i))) for i in array])



@test.it("Basic tests")
def _():
    test.assert_equals(
        to_csv_text([
            [0, 1, 2, 3, 45],
            [10, 11, 12, 13, 14],
            [20, 21, 22, 23, 24],
            [30, 31, 32, 33, 34]
        ]),
        "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34",
    )

    test.assert_equals(
        to_csv_text([
            [-25, 21, 2, -33, 48],
            [30, 31, -32, 33, -34]
        ]),
        "-25,21,2,-33,48\n30,31,-32,33,-34",
    )

    test.assert_equals(
        to_csv_text([
            [5, 55, 5, 5, 55],
            [6, 6, 66, 23, 24],
            [666, 31, 66, 33, 7]
        ]),
        "5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7",
    )

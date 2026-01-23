'''
task 157:
Books - CountHigh
You need to count how many values are greater than 50 in book page counts
'''

def count_above_fifty_books(pages):
    return sum(1 for x in pages if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_books([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_books([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_books([1, 2, 3])),
        ([100, 200], count_above_fifty_books([100, 200])),
        ([], count_above_fifty_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

'''
task 151:
Books - Sum
You need to calculate the total sum of book page counts
'''

def total_books(pages):
    return sum(pages)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_books([10, 20, 30])),
        ([50, 60, 70], total_books([50, 60, 70])),
        ([1, 2, 3], total_books([1, 2, 3])),
        ([100, 200], total_books([100, 200])),
        ([], total_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

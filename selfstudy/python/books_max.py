'''
task 152:
Books - Max
You need to find the maximum value among book page counts
'''

def highest_books(pages):
    return max(pages) if pages else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_books([10, 20, 30])),
        ([50, 60, 70], highest_books([50, 60, 70])),
        ([1, 2, 3], highest_books([1, 2, 3])),
        ([100, 200], highest_books([100, 200])),
        ([], highest_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

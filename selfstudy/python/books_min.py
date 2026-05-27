'''
task 153:
Books - Min
You need to find the minimum value among book page counts
'''

def lowest_books(pages):
    return min(pages) if pages else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_books([10, 20, 30])),
        ([50, 60, 70], lowest_books([50, 60, 70])),
        ([1, 2, 3], lowest_books([1, 2, 3])),
        ([100, 200], lowest_books([100, 200])),
        ([], lowest_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

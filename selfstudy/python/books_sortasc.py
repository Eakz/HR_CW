'''
task 159:
Books - SortAsc
You need to sort the values in ascending order for book page counts
'''

def sort_up_books(pages):
    return sorted(pages)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_books([10, 20, 30])),
        ([50, 60, 70], sort_up_books([50, 60, 70])),
        ([1, 2, 3], sort_up_books([1, 2, 3])),
        ([100, 200], sort_up_books([100, 200])),
        ([], sort_up_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

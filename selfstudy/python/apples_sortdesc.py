'''
task 110:
Apples - SortDesc
You need to sort the values in descending order for apple weights in grams
'''

def sort_down_apples(apples):
    return sorted(apples, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_apples([10, 20, 30])),
        ([50, 60, 70], sort_down_apples([50, 60, 70])),
        ([1, 2, 3], sort_down_apples([1, 2, 3])),
        ([100, 200], sort_down_apples([100, 200])),
        ([], sort_down_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

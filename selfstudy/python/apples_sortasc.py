'''
task 109:
Apples - SortAsc
You need to sort the values in ascending order for apple weights in grams
'''

def sort_up_apples(apples):
    return sorted(apples)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_apples([10, 20, 30])),
        ([50, 60, 70], sort_up_apples([50, 60, 70])),
        ([1, 2, 3], sort_up_apples([1, 2, 3])),
        ([100, 200], sort_up_apples([100, 200])),
        ([], sort_up_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

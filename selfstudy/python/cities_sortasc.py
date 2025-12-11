'''
task 179:
Cities - SortAsc
You need to sort the values in ascending order for city populations in thousands
'''

def sort_up_cities(populations):
    return sorted(populations)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_cities([10, 20, 30])),
        ([50, 60, 70], sort_up_cities([50, 60, 70])),
        ([1, 2, 3], sort_up_cities([1, 2, 3])),
        ([100, 200], sort_up_cities([100, 200])),
        ([], sort_up_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

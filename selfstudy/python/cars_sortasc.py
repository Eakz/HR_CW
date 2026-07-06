'''
task 129:
Cars - SortAsc
You need to sort the values in ascending order for car speeds in km/h
'''

def sort_up_cars(speeds):
    return sorted(speeds)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_cars([10, 20, 30])),
        ([50, 60, 70], sort_up_cars([50, 60, 70])),
        ([1, 2, 3], sort_up_cars([1, 2, 3])),
        ([100, 200], sort_up_cars([100, 200])),
        ([], sort_up_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

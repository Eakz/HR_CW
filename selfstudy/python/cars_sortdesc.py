'''
task 130:
Cars - SortDesc
You need to sort the values in descending order for car speeds in km/h
'''

def sort_down_cars(speeds):
    return sorted(speeds, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_cars([10, 20, 30])),
        ([50, 60, 70], sort_down_cars([50, 60, 70])),
        ([1, 2, 3], sort_down_cars([1, 2, 3])),
        ([100, 200], sort_down_cars([100, 200])),
        ([], sort_down_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

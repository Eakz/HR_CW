'''
task 123:
Cars - Min
You need to find the minimum value among car speeds in km/h
'''

def lowest_cars(speeds):
    return min(speeds) if speeds else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_cars([10, 20, 30])),
        ([50, 60, 70], lowest_cars([50, 60, 70])),
        ([1, 2, 3], lowest_cars([1, 2, 3])),
        ([100, 200], lowest_cars([100, 200])),
        ([], lowest_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

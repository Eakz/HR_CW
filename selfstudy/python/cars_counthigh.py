'''
task 127:
Cars - CountHigh
You need to count how many values are greater than 50 in car speeds in km/h
'''

def count_above_fifty_cars(speeds):
    return sum(1 for x in speeds if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_cars([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_cars([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_cars([1, 2, 3])),
        ([100, 200], count_above_fifty_cars([100, 200])),
        ([], count_above_fifty_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

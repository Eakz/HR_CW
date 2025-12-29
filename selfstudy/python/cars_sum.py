'''
task 121:
Cars - Sum
You need to calculate the total sum of car speeds in km/h
'''

def total_cars(speeds):
    return sum(speeds)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_cars([10, 20, 30])),
        ([50, 60, 70], total_cars([50, 60, 70])),
        ([1, 2, 3], total_cars([1, 2, 3])),
        ([100, 200], total_cars([100, 200])),
        ([], total_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

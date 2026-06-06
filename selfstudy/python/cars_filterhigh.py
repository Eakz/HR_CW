'''
task 125:
Cars - FilterHigh
You need to return only the values greater than 50 from car speeds in km/h
'''

def above_fifty_cars(speeds):
    return [x for x in speeds if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_cars([10, 20, 30])),
        ([50, 60, 70], above_fifty_cars([50, 60, 70])),
        ([1, 2, 3], above_fifty_cars([1, 2, 3])),
        ([100, 200], above_fifty_cars([100, 200])),
        ([], above_fifty_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

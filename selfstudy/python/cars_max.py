'''
task 122:
Cars - Max
You need to find the maximum value among car speeds in km/h
'''

def highest_cars(speeds):
    return max(speeds) if speeds else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_cars([10, 20, 30])),
        ([50, 60, 70], highest_cars([50, 60, 70])),
        ([1, 2, 3], highest_cars([1, 2, 3])),
        ([100, 200], highest_cars([100, 200])),
        ([], highest_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

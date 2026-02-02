'''
task 124:
Cars - Avg
You need to compute the average of car speeds in km/h
'''

def average_cars(speeds):
    return sum(speeds) / len(speeds) if speeds else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_cars([10, 20, 30])),
        ([50, 60, 70], average_cars([50, 60, 70])),
        ([1, 2, 3], average_cars([1, 2, 3])),
        ([100, 200], average_cars([100, 200])),
        ([], average_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

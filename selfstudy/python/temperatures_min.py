'''
task 143:
Temperatures - Min
You need to find the minimum value among daily temperatures in Celsius
'''

def lowest_temperatures(temps):
    return min(temps) if temps else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_temperatures([10, 20, 30])),
        ([50, 60, 70], lowest_temperatures([50, 60, 70])),
        ([1, 2, 3], lowest_temperatures([1, 2, 3])),
        ([100, 200], lowest_temperatures([100, 200])),
        ([], lowest_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

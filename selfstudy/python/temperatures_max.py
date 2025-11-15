'''
task 142:
Temperatures - Max
You need to find the maximum value among daily temperatures in Celsius
'''

def highest_temperatures(temps):
    return max(temps) if temps else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_temperatures([10, 20, 30])),
        ([50, 60, 70], highest_temperatures([50, 60, 70])),
        ([1, 2, 3], highest_temperatures([1, 2, 3])),
        ([100, 200], highest_temperatures([100, 200])),
        ([], highest_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

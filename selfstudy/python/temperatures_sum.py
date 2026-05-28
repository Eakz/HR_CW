'''
task 141:
Temperatures - Sum
You need to calculate the total sum of daily temperatures in Celsius
'''

def total_temperatures(temps):
    return sum(temps)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_temperatures([10, 20, 30])),
        ([50, 60, 70], total_temperatures([50, 60, 70])),
        ([1, 2, 3], total_temperatures([1, 2, 3])),
        ([100, 200], total_temperatures([100, 200])),
        ([], total_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

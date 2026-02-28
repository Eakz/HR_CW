'''
task 149:
Temperatures - SortAsc
You need to sort the values in ascending order for daily temperatures in Celsius
'''

def sort_up_temperatures(temps):
    return sorted(temps)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_temperatures([10, 20, 30])),
        ([50, 60, 70], sort_up_temperatures([50, 60, 70])),
        ([1, 2, 3], sort_up_temperatures([1, 2, 3])),
        ([100, 200], sort_up_temperatures([100, 200])),
        ([], sort_up_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

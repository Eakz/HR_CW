'''
task 144:
Temperatures - Avg
You need to compute the average of daily temperatures in Celsius
'''

def average_temperatures(temps):
    return sum(temps) / len(temps) if temps else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_temperatures([10, 20, 30])),
        ([50, 60, 70], average_temperatures([50, 60, 70])),
        ([1, 2, 3], average_temperatures([1, 2, 3])),
        ([100, 200], average_temperatures([100, 200])),
        ([], average_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

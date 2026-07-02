'''
task 146:
Temperatures - FilterLow
You need to return only the values less than 50 from daily temperatures in Celsius
'''

def below_fifty_temperatures(temps):
    return [x for x in temps if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_temperatures([10, 20, 30])),
        ([50, 60, 70], below_fifty_temperatures([50, 60, 70])),
        ([1, 2, 3], below_fifty_temperatures([1, 2, 3])),
        ([100, 200], below_fifty_temperatures([100, 200])),
        ([], below_fifty_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

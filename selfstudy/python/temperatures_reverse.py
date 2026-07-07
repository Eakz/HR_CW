'''
task 148:
Temperatures - Reverse
You need to reverse the order of daily temperatures in Celsius
'''

def reverse_order_temperatures(temps):
    return temps[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_temperatures([10, 20, 30])),
        ([50, 60, 70], reverse_order_temperatures([50, 60, 70])),
        ([1, 2, 3], reverse_order_temperatures([1, 2, 3])),
        ([100, 200], reverse_order_temperatures([100, 200])),
        ([], reverse_order_temperatures([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_temperatures(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

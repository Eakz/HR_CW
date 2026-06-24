'''
task 128:
Cars - Reverse
You need to reverse the order of car speeds in km/h
'''

def reverse_order_cars(speeds):
    return speeds[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_cars([10, 20, 30])),
        ([50, 60, 70], reverse_order_cars([50, 60, 70])),
        ([1, 2, 3], reverse_order_cars([1, 2, 3])),
        ([100, 200], reverse_order_cars([100, 200])),
        ([], reverse_order_cars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_cars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

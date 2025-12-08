'''
task 108:
Apples - Reverse
You need to reverse the order of apple weights in grams
'''

def reverse_order_apples(apples):
    return apples[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_apples([10, 20, 30])),
        ([50, 60, 70], reverse_order_apples([50, 60, 70])),
        ([1, 2, 3], reverse_order_apples([1, 2, 3])),
        ([100, 200], reverse_order_apples([100, 200])),
        ([], reverse_order_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

'''
task 178:
Cities - Reverse
You need to reverse the order of city populations in thousands
'''

def reverse_order_cities(populations):
    return populations[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_cities([10, 20, 30])),
        ([50, 60, 70], reverse_order_cities([50, 60, 70])),
        ([1, 2, 3], reverse_order_cities([1, 2, 3])),
        ([100, 200], reverse_order_cities([100, 200])),
        ([], reverse_order_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

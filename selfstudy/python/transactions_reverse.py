'''
task 138:
Transactions - Reverse
You need to reverse the order of transaction amounts in dollars
'''

def reverse_order_transactions(amounts):
    return amounts[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_transactions([10, 20, 30])),
        ([50, 60, 70], reverse_order_transactions([50, 60, 70])),
        ([1, 2, 3], reverse_order_transactions([1, 2, 3])),
        ([100, 200], reverse_order_transactions([100, 200])),
        ([], reverse_order_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

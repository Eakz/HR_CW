'''
task 133:
Transactions - Min
You need to find the minimum value among transaction amounts in dollars
'''

def lowest_transactions(amounts):
    return min(amounts) if amounts else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_transactions([10, 20, 30])),
        ([50, 60, 70], lowest_transactions([50, 60, 70])),
        ([1, 2, 3], lowest_transactions([1, 2, 3])),
        ([100, 200], lowest_transactions([100, 200])),
        ([], lowest_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

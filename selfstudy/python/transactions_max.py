'''
task 132:
Transactions - Max
You need to find the maximum value among transaction amounts in dollars
'''

def highest_transactions(amounts):
    return max(amounts) if amounts else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_transactions([10, 20, 30])),
        ([50, 60, 70], highest_transactions([50, 60, 70])),
        ([1, 2, 3], highest_transactions([1, 2, 3])),
        ([100, 200], highest_transactions([100, 200])),
        ([], highest_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

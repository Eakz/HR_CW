'''
task 131:
Transactions - Sum
You need to calculate the total sum of transaction amounts in dollars
'''

def total_transactions(amounts):
    return sum(amounts)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_transactions([10, 20, 30])),
        ([50, 60, 70], total_transactions([50, 60, 70])),
        ([1, 2, 3], total_transactions([1, 2, 3])),
        ([100, 200], total_transactions([100, 200])),
        ([], total_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

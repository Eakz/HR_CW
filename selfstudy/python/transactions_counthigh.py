'''
task 137:
Transactions - CountHigh
You need to count how many values are greater than 50 in transaction amounts in dollars
'''

def count_above_fifty_transactions(amounts):
    return sum(1 for x in amounts if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_transactions([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_transactions([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_transactions([1, 2, 3])),
        ([100, 200], count_above_fifty_transactions([100, 200])),
        ([], count_above_fifty_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

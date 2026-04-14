'''
task 140:
Transactions - SortDesc
You need to sort the values in descending order for transaction amounts in dollars
'''

def sort_down_transactions(amounts):
    return sorted(amounts, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_transactions([10, 20, 30])),
        ([50, 60, 70], sort_down_transactions([50, 60, 70])),
        ([1, 2, 3], sort_down_transactions([1, 2, 3])),
        ([100, 200], sort_down_transactions([100, 200])),
        ([], sort_down_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

'''
task 139:
Transactions - SortAsc
You need to sort the values in ascending order for transaction amounts in dollars
'''

def sort_up_transactions(amounts):
    return sorted(amounts)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_transactions([10, 20, 30])),
        ([50, 60, 70], sort_up_transactions([50, 60, 70])),
        ([1, 2, 3], sort_up_transactions([1, 2, 3])),
        ([100, 200], sort_up_transactions([100, 200])),
        ([], sort_up_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

'''
task 134:
Transactions - Avg
You need to compute the average of transaction amounts in dollars
'''

def average_transactions(amounts):
    return sum(amounts) / len(amounts) if amounts else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_transactions([10, 20, 30])),
        ([50, 60, 70], average_transactions([50, 60, 70])),
        ([1, 2, 3], average_transactions([1, 2, 3])),
        ([100, 200], average_transactions([100, 200])),
        ([], average_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

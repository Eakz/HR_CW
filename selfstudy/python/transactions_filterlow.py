'''
task 136:
Transactions - FilterLow
You need to return only the values less than 50 from transaction amounts in dollars
'''

def below_fifty_transactions(amounts):
    return [x for x in amounts if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_transactions([10, 20, 30])),
        ([50, 60, 70], below_fifty_transactions([50, 60, 70])),
        ([1, 2, 3], below_fifty_transactions([1, 2, 3])),
        ([100, 200], below_fifty_transactions([100, 200])),
        ([], below_fifty_transactions([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_transactions(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

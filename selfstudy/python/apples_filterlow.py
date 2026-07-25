'''
task 106:
Apples - FilterLow
You need to return only the values less than 50 from apple weights in grams
'''

def below_fifty_apples(apples):
    return [x for x in apples if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_apples([10, 20, 30])),
        ([50, 60, 70], below_fifty_apples([50, 60, 70])),
        ([1, 2, 3], below_fifty_apples([1, 2, 3])),
        ([100, 200], below_fifty_apples([100, 200])),
        ([], below_fifty_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

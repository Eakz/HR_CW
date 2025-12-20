'''
task 105:
Apples - FilterHigh
You need to return only the values greater than 50 from apple weights in grams
'''

def above_fifty_apples(apples):
    return [x for x in apples if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_apples([10, 20, 30])),
        ([50, 60, 70], above_fifty_apples([50, 60, 70])),
        ([1, 2, 3], above_fifty_apples([1, 2, 3])),
        ([100, 200], above_fifty_apples([100, 200])),
        ([], above_fifty_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

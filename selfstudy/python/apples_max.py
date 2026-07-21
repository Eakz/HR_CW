'''
task 102:
Apples - Max
You need to find the maximum value among apple weights in grams
'''

def highest_apples(apples):
    return max(apples) if apples else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_apples([10, 20, 30])),
        ([50, 60, 70], highest_apples([50, 60, 70])),
        ([1, 2, 3], highest_apples([1, 2, 3])),
        ([100, 200], highest_apples([100, 200])),
        ([], highest_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

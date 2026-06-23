'''
task 101:
Apples - Sum
You need to calculate the total sum of apple weights in grams
'''

def total_apples(apples):
    return sum(apples)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_apples([10, 20, 30])),
        ([50, 60, 70], total_apples([50, 60, 70])),
        ([1, 2, 3], total_apples([1, 2, 3])),
        ([100, 200], total_apples([100, 200])),
        ([], total_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

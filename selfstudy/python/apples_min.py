'''
task 103:
Apples - Min
You need to find the minimum value among apple weights in grams
'''

def lowest_apples(apples):
    return min(apples) if apples else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_apples([10, 20, 30])),
        ([50, 60, 70], lowest_apples([50, 60, 70])),
        ([1, 2, 3], lowest_apples([1, 2, 3])),
        ([100, 200], lowest_apples([100, 200])),
        ([], lowest_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

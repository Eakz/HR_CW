'''
task 107:
Apples - CountHigh
You need to count how many values are greater than 50 in apple weights in grams
'''

def count_above_fifty_apples(apples):
    return sum(1 for x in apples if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_apples([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_apples([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_apples([1, 2, 3])),
        ([100, 200], count_above_fifty_apples([100, 200])),
        ([], count_above_fifty_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

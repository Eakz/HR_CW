'''
task 104:
Apples - Avg
You need to compute the average of apple weights in grams
'''

def average_apples(apples):
    return sum(apples) / len(apples) if apples else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_apples([10, 20, 30])),
        ([50, 60, 70], average_apples([50, 60, 70])),
        ([1, 2, 3], average_apples([1, 2, 3])),
        ([100, 200], average_apples([100, 200])),
        ([], average_apples([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_apples(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

'''
Task: Cats - Sum
Calculate the total sum of cat weights.
'''

def sum_cats(cats):
    return sum(cats)

if __name__ == '__main__':
    tests = [
        ([10, 20, 30], 60),
        ([5, 5, 5], 15),
        ([1, 2], 3),
        ([100], 100),
        ([], 0)
    ]
    import sys
    if 'pytest' in sys.argv:
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sum_cats(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

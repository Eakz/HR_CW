'''
task 173:
Cities - Min
You need to find the minimum value among city populations in thousands
'''

def lowest_cities(populations):
    return min(populations) if populations else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_cities([10, 20, 30])),
        ([50, 60, 70], lowest_cities([50, 60, 70])),
        ([1, 2, 3], lowest_cities([1, 2, 3])),
        ([100, 200], lowest_cities([100, 200])),
        ([], lowest_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

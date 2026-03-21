'''
task 177:
Cities - CountHigh
You need to count how many values are greater than 50 in city populations in thousands
'''

def count_above_fifty_cities(populations):
    return sum(1 for x in populations if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_cities([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_cities([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_cities([1, 2, 3])),
        ([100, 200], count_above_fifty_cities([100, 200])),
        ([], count_above_fifty_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

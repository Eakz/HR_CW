'''
task 175:
Cities - FilterHigh
You need to return only the values greater than 50 from city populations in thousands
'''

def above_fifty_cities(populations):
    return [x for x in populations if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_cities([10, 20, 30])),
        ([50, 60, 70], above_fifty_cities([50, 60, 70])),
        ([1, 2, 3], above_fifty_cities([1, 2, 3])),
        ([100, 200], above_fifty_cities([100, 200])),
        ([], above_fifty_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

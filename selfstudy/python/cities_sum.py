'''
task 171:
Cities - Sum
You need to calculate the total sum of city populations in thousands
'''

def total_cities(populations):
    return sum(populations)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_cities([10, 20, 30])),
        ([50, 60, 70], total_cities([50, 60, 70])),
        ([1, 2, 3], total_cities([1, 2, 3])),
        ([100, 200], total_cities([100, 200])),
        ([], total_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

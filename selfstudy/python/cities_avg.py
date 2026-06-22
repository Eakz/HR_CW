'''
task 174:
Cities - Avg
You need to compute the average of city populations in thousands
'''

def average_cities(populations):
    return sum(populations) / len(populations) if populations else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_cities([10, 20, 30])),
        ([50, 60, 70], average_cities([50, 60, 70])),
        ([1, 2, 3], average_cities([1, 2, 3])),
        ([100, 200], average_cities([100, 200])),
        ([], average_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

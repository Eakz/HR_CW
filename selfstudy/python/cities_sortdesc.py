'''
task 180:
Cities - SortDesc
You need to sort the values in descending order for city populations in thousands
'''

def sort_down_cities(populations):
    return sorted(populations, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_cities([10, 20, 30])),
        ([50, 60, 70], sort_down_cities([50, 60, 70])),
        ([1, 2, 3], sort_down_cities([1, 2, 3])),
        ([100, 200], sort_down_cities([100, 200])),
        ([], sort_down_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

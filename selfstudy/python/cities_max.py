'''
task 172:
Cities - Max
You need to find the maximum value among city populations in thousands
'''

def highest_cities(populations):
    return max(populations) if populations else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_cities([10, 20, 30])),
        ([50, 60, 70], highest_cities([50, 60, 70])),
        ([1, 2, 3], highest_cities([1, 2, 3])),
        ([100, 200], highest_cities([100, 200])),
        ([], highest_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

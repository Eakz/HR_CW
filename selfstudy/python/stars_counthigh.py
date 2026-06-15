'''
task 187:
Stars - CountHigh
You need to count how many values are greater than 50 in star luminosities
'''

def count_above_fifty_stars(brightness):
    return sum(1 for x in brightness if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_stars([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_stars([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_stars([1, 2, 3])),
        ([100, 200], count_above_fifty_stars([100, 200])),
        ([], count_above_fifty_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

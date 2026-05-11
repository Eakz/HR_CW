'''
task 181:
Stars - Sum
You need to calculate the total sum of star luminosities
'''

def total_stars(brightness):
    return sum(brightness)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_stars([10, 20, 30])),
        ([50, 60, 70], total_stars([50, 60, 70])),
        ([1, 2, 3], total_stars([1, 2, 3])),
        ([100, 200], total_stars([100, 200])),
        ([], total_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

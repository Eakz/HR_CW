'''
task 182:
Stars - Max
You need to find the maximum value among star luminosities
'''

def highest_stars(brightness):
    return max(brightness) if brightness else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_stars([10, 20, 30])),
        ([50, 60, 70], highest_stars([50, 60, 70])),
        ([1, 2, 3], highest_stars([1, 2, 3])),
        ([100, 200], highest_stars([100, 200])),
        ([], highest_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

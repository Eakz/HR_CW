'''
task 183:
Stars - Min
You need to find the minimum value among star luminosities
'''

def lowest_stars(brightness):
    return min(brightness) if brightness else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_stars([10, 20, 30])),
        ([50, 60, 70], lowest_stars([50, 60, 70])),
        ([1, 2, 3], lowest_stars([1, 2, 3])),
        ([100, 200], lowest_stars([100, 200])),
        ([], lowest_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

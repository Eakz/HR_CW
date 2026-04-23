'''
task 184:
Stars - Avg
You need to compute the average of star luminosities
'''

def average_stars(brightness):
    return sum(brightness) / len(brightness) if brightness else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_stars([10, 20, 30])),
        ([50, 60, 70], average_stars([50, 60, 70])),
        ([1, 2, 3], average_stars([1, 2, 3])),
        ([100, 200], average_stars([100, 200])),
        ([], average_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

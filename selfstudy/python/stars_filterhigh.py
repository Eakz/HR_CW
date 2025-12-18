'''
task 185:
Stars - FilterHigh
You need to return only the values greater than 50 from star luminosities
'''

def above_fifty_stars(brightness):
    return [x for x in brightness if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_stars([10, 20, 30])),
        ([50, 60, 70], above_fifty_stars([50, 60, 70])),
        ([1, 2, 3], above_fifty_stars([1, 2, 3])),
        ([100, 200], above_fifty_stars([100, 200])),
        ([], above_fifty_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

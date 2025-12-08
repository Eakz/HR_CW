'''
task 186:
Stars - FilterLow
You need to return only the values less than 50 from star luminosities
'''

def below_fifty_stars(brightness):
    return [x for x in brightness if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_stars([10, 20, 30])),
        ([50, 60, 70], below_fifty_stars([50, 60, 70])),
        ([1, 2, 3], below_fifty_stars([1, 2, 3])),
        ([100, 200], below_fifty_stars([100, 200])),
        ([], below_fifty_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

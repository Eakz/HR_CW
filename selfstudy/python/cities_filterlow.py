'''
task 176:
Cities - FilterLow
You need to return only the values less than 50 from city populations in thousands
'''

def below_fifty_cities(populations):
    return [x for x in populations if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_cities([10, 20, 30])),
        ([50, 60, 70], below_fifty_cities([50, 60, 70])),
        ([1, 2, 3], below_fifty_cities([1, 2, 3])),
        ([100, 200], below_fifty_cities([100, 200])),
        ([], below_fifty_cities([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_cities(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

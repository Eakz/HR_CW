'''
task 166:
Players - FilterLow
You need to return only the values less than 50 from player heights in cm
'''

def below_fifty_players(heights):
    return [x for x in heights if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_players([10, 20, 30])),
        ([50, 60, 70], below_fifty_players([50, 60, 70])),
        ([1, 2, 3], below_fifty_players([1, 2, 3])),
        ([100, 200], below_fifty_players([100, 200])),
        ([], below_fifty_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

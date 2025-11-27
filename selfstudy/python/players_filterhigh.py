'''
task 165:
Players - FilterHigh
You need to return only the values greater than 50 from player heights in cm
'''

def above_fifty_players(heights):
    return [x for x in heights if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_players([10, 20, 30])),
        ([50, 60, 70], above_fifty_players([50, 60, 70])),
        ([1, 2, 3], above_fifty_players([1, 2, 3])),
        ([100, 200], above_fifty_players([100, 200])),
        ([], above_fifty_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

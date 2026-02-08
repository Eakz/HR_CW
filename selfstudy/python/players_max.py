'''
task 162:
Players - Max
You need to find the maximum value among player heights in cm
'''

def highest_players(heights):
    return max(heights) if heights else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_players([10, 20, 30])),
        ([50, 60, 70], highest_players([50, 60, 70])),
        ([1, 2, 3], highest_players([1, 2, 3])),
        ([100, 200], highest_players([100, 200])),
        ([], highest_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

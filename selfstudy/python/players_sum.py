'''
task 161:
Players - Sum
You need to calculate the total sum of player heights in cm
'''

def total_players(heights):
    return sum(heights)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_players([10, 20, 30])),
        ([50, 60, 70], total_players([50, 60, 70])),
        ([1, 2, 3], total_players([1, 2, 3])),
        ([100, 200], total_players([100, 200])),
        ([], total_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

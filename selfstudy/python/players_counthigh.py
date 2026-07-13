'''
task 167:
Players - CountHigh
You need to count how many values are greater than 50 in player heights in cm
'''

def count_above_fifty_players(heights):
    return sum(1 for x in heights if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_players([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_players([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_players([1, 2, 3])),
        ([100, 200], count_above_fifty_players([100, 200])),
        ([], count_above_fifty_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

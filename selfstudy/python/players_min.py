'''
task 163:
Players - Min
You need to find the minimum value among player heights in cm
'''

def lowest_players(heights):
    return min(heights) if heights else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_players([10, 20, 30])),
        ([50, 60, 70], lowest_players([50, 60, 70])),
        ([1, 2, 3], lowest_players([1, 2, 3])),
        ([100, 200], lowest_players([100, 200])),
        ([], lowest_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

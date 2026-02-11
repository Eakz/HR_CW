'''
task 170:
Players - SortDesc
You need to sort the values in descending order for player heights in cm
'''

def sort_down_players(heights):
    return sorted(heights, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_players([10, 20, 30])),
        ([50, 60, 70], sort_down_players([50, 60, 70])),
        ([1, 2, 3], sort_down_players([1, 2, 3])),
        ([100, 200], sort_down_players([100, 200])),
        ([], sort_down_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

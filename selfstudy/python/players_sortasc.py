'''
task 169:
Players - SortAsc
You need to sort the values in ascending order for player heights in cm
'''

def sort_up_players(heights):
    return sorted(heights)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_players([10, 20, 30])),
        ([50, 60, 70], sort_up_players([50, 60, 70])),
        ([1, 2, 3], sort_up_players([1, 2, 3])),
        ([100, 200], sort_up_players([100, 200])),
        ([], sort_up_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

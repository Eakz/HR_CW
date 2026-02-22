'''
task 168:
Players - Reverse
You need to reverse the order of player heights in cm
'''

def reverse_order_players(heights):
    return heights[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_players([10, 20, 30])),
        ([50, 60, 70], reverse_order_players([50, 60, 70])),
        ([1, 2, 3], reverse_order_players([1, 2, 3])),
        ([100, 200], reverse_order_players([100, 200])),
        ([], reverse_order_players([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_players(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

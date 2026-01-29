'''
task 190:
Stars - SortDesc
You need to sort the values in descending order for star luminosities
'''

def sort_down_stars(brightness):
    return sorted(brightness, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_stars([10, 20, 30])),
        ([50, 60, 70], sort_down_stars([50, 60, 70])),
        ([1, 2, 3], sort_down_stars([1, 2, 3])),
        ([100, 200], sort_down_stars([100, 200])),
        ([], sort_down_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

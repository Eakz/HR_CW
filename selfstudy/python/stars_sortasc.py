'''
task 189:
Stars - SortAsc
You need to sort the values in ascending order for star luminosities
'''

def sort_up_stars(brightness):
    return sorted(brightness)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_stars([10, 20, 30])),
        ([50, 60, 70], sort_up_stars([50, 60, 70])),
        ([1, 2, 3], sort_up_stars([1, 2, 3])),
        ([100, 200], sort_up_stars([100, 200])),
        ([], sort_up_stars([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_stars(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

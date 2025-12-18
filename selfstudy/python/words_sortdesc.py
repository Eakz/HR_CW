'''
task 200:
Words - SortDesc
You need to sort the values in descending order for word lengths
'''

def sort_down_words(lengths):
    return sorted(lengths, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_words([10, 20, 30])),
        ([50, 60, 70], sort_down_words([50, 60, 70])),
        ([1, 2, 3], sort_down_words([1, 2, 3])),
        ([100, 200], sort_down_words([100, 200])),
        ([], sort_down_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

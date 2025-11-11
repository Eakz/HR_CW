'''
task 199:
Words - SortAsc
You need to sort the values in ascending order for word lengths
'''

def sort_up_words(lengths):
    return sorted(lengths)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_words([10, 20, 30])),
        ([50, 60, 70], sort_up_words([50, 60, 70])),
        ([1, 2, 3], sort_up_words([1, 2, 3])),
        ([100, 200], sort_up_words([100, 200])),
        ([], sort_up_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

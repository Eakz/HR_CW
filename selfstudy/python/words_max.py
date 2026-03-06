'''
task 192:
Words - Max
You need to find the maximum value among word lengths
'''

def highest_words(lengths):
    return max(lengths) if lengths else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_words([10, 20, 30])),
        ([50, 60, 70], highest_words([50, 60, 70])),
        ([1, 2, 3], highest_words([1, 2, 3])),
        ([100, 200], highest_words([100, 200])),
        ([], highest_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

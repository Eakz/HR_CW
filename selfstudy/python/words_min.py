'''
task 193:
Words - Min
You need to find the minimum value among word lengths
'''

def lowest_words(lengths):
    return min(lengths) if lengths else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], lowest_words([10, 20, 30])),
        ([50, 60, 70], lowest_words([50, 60, 70])),
        ([1, 2, 3], lowest_words([1, 2, 3])),
        ([100, 200], lowest_words([100, 200])),
        ([], lowest_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = lowest_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

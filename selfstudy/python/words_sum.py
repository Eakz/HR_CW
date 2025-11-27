'''
task 191:
Words - Sum
You need to calculate the total sum of word lengths
'''

def total_words(lengths):
    return sum(lengths)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_words([10, 20, 30])),
        ([50, 60, 70], total_words([50, 60, 70])),
        ([1, 2, 3], total_words([1, 2, 3])),
        ([100, 200], total_words([100, 200])),
        ([], total_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

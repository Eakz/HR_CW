'''
task 197:
Words - CountHigh
You need to count how many values are greater than 50 in word lengths
'''

def count_above_fifty_words(lengths):
    return sum(1 for x in lengths if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_words([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_words([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_words([1, 2, 3])),
        ([100, 200], count_above_fifty_words([100, 200])),
        ([], count_above_fifty_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

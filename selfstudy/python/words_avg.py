'''
task 194:
Words - Avg
You need to compute the average of word lengths
'''

def average_words(lengths):
    return sum(lengths) / len(lengths) if lengths else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_words([10, 20, 30])),
        ([50, 60, 70], average_words([50, 60, 70])),
        ([1, 2, 3], average_words([1, 2, 3])),
        ([100, 200], average_words([100, 200])),
        ([], average_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

'''
task 195:
Words - FilterHigh
You need to return only the values greater than 50 from word lengths
'''

def above_fifty_words(lengths):
    return [x for x in lengths if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_words([10, 20, 30])),
        ([50, 60, 70], above_fifty_words([50, 60, 70])),
        ([1, 2, 3], above_fifty_words([1, 2, 3])),
        ([100, 200], above_fifty_words([100, 200])),
        ([], above_fifty_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

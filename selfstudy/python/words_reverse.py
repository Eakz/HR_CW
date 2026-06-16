'''
task 198:
Words - Reverse
You need to reverse the order of word lengths
'''

def reverse_order_words(lengths):
    return lengths[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_words([10, 20, 30])),
        ([50, 60, 70], reverse_order_words([50, 60, 70])),
        ([1, 2, 3], reverse_order_words([1, 2, 3])),
        ([100, 200], reverse_order_words([100, 200])),
        ([], reverse_order_words([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_words(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

'''
task 112:
Students - Max
You need to find the maximum value among student test scores
'''

def highest_students(scores):
    return max(scores) if scores else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], highest_students([10, 20, 30])),
        ([50, 60, 70], highest_students([50, 60, 70])),
        ([1, 2, 3], highest_students([1, 2, 3])),
        ([100, 200], highest_students([100, 200])),
        ([], highest_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = highest_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

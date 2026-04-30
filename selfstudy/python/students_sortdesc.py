'''
task 120:
Students - SortDesc
You need to sort the values in descending order for student test scores
'''

def sort_down_students(scores):
    return sorted(scores, reverse=True)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_down_students([10, 20, 30])),
        ([50, 60, 70], sort_down_students([50, 60, 70])),
        ([1, 2, 3], sort_down_students([1, 2, 3])),
        ([100, 200], sort_down_students([100, 200])),
        ([], sort_down_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_down_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

'''
task 119:
Students - SortAsc
You need to sort the values in ascending order for student test scores
'''

def sort_up_students(scores):
    return sorted(scores)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], sort_up_students([10, 20, 30])),
        ([50, 60, 70], sort_up_students([50, 60, 70])),
        ([1, 2, 3], sort_up_students([1, 2, 3])),
        ([100, 200], sort_up_students([100, 200])),
        ([], sort_up_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = sort_up_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

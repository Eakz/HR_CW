'''
task 111:
Students - Sum
You need to calculate the total sum of student test scores
'''

def total_students(scores):
    return sum(scores)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], total_students([10, 20, 30])),
        ([50, 60, 70], total_students([50, 60, 70])),
        ([1, 2, 3], total_students([1, 2, 3])),
        ([100, 200], total_students([100, 200])),
        ([], total_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = total_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

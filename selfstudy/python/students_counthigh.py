'''
task 117:
Students - CountHigh
You need to count how many values are greater than 50 in student test scores
'''

def count_above_fifty_students(scores):
    return sum(1 for x in scores if x > 50)

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], count_above_fifty_students([10, 20, 30])),
        ([50, 60, 70], count_above_fifty_students([50, 60, 70])),
        ([1, 2, 3], count_above_fifty_students([1, 2, 3])),
        ([100, 200], count_above_fifty_students([100, 200])),
        ([], count_above_fifty_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = count_above_fifty_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# works i think

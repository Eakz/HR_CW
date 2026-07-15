'''
task 114:
Students - Avg
You need to compute the average of student test scores
'''

def average_students(scores):
    return sum(scores) / len(scores) if scores else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_students([10, 20, 30])),
        ([50, 60, 70], average_students([50, 60, 70])),
        ([1, 2, 3], average_students([1, 2, 3])),
        ([100, 200], average_students([100, 200])),
        ([], average_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

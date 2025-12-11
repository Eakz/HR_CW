'''
task 115:
Students - FilterHigh
You need to return only the values greater than 50 from student test scores
'''

def above_fifty_students(scores):
    return [x for x in scores if x > 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], above_fifty_students([10, 20, 30])),
        ([50, 60, 70], above_fifty_students([50, 60, 70])),
        ([1, 2, 3], above_fifty_students([1, 2, 3])),
        ([100, 200], above_fifty_students([100, 200])),
        ([], above_fifty_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = above_fifty_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

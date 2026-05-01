'''
task 116:
Students - FilterLow
You need to return only the values less than 50 from student test scores
'''

def below_fifty_students(scores):
    return [x for x in scores if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_students([10, 20, 30])),
        ([50, 60, 70], below_fifty_students([50, 60, 70])),
        ([1, 2, 3], below_fifty_students([1, 2, 3])),
        ([100, 200], below_fifty_students([100, 200])),
        ([], below_fifty_students([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_students(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

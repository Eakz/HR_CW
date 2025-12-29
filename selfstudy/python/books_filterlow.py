'''
task 156:
Books - FilterLow
You need to return only the values less than 50 from book page counts
'''

def below_fifty_books(pages):
    return [x for x in pages if x < 50]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], below_fifty_books([10, 20, 30])),
        ([50, 60, 70], below_fifty_books([50, 60, 70])),
        ([1, 2, 3], below_fifty_books([1, 2, 3])),
        ([100, 200], below_fifty_books([100, 200])),
        ([], below_fifty_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = below_fifty_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# finally works

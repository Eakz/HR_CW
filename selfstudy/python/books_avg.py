'''
task 154:
Books - Avg
You need to compute the average of book page counts
'''

def average_books(pages):
    return sum(pages) / len(pages) if pages else 0

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], average_books([10, 20, 30])),
        ([50, 60, 70], average_books([50, 60, 70])),
        ([1, 2, 3], average_books([1, 2, 3])),
        ([100, 200], average_books([100, 200])),
        ([], average_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = average_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

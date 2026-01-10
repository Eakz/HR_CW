'''
task 158:
Books - Reverse
You need to reverse the order of book page counts
'''

def reverse_order_books(pages):
    return pages[::-1]

# Tests
if __name__ == '__main__':
    tests = [
        ([10, 20, 30], reverse_order_books([10, 20, 30])),
        ([50, 60, 70], reverse_order_books([50, 60, 70])),
        ([1, 2, 3], reverse_order_books([1, 2, 3])),
        ([100, 200], reverse_order_books([100, 200])),
        ([], reverse_order_books([]))
    ]
    import sys
    if 'pytest' in sys.argv:
        # pytest structure
        pass
    else:
        for idx, (inp, exp) in enumerate(tests):
            res = reverse_order_books(inp)
            print(f"Test {idx+1}:", "PASS" if res == exp else "FAIL")

# done

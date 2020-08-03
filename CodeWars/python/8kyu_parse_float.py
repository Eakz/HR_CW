# https://www.codewars.com/kata/57a386117cb1f31890000039/train/python

def parse_float(string):
    try:
        return float(string)
    except Exception as e:
        return None


ts = (
    ("1.0", 1.0),
    ("a", None),
    ("234.0234", 234.0234)
)

for t in ts:
    print(parse_float(t[0]), t[1])
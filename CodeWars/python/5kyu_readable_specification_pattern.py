# https://www.codewars.com/kata/5dc424122c135e001499d0e5/train/python
class Meta(type):
    def __invert__(self): return Meta(
        "", (), {"__new__": lambda _, x: not self(x)})
    def __and__(self, other): return Meta(
        "", (), {"__new__": lambda _, x: self(x) and other(x)})

    def __or__(self, other): return Meta(
        "", (), {"__new__": lambda _, x: self(x) or other(x)})


class Specification(metaclass=Meta):
    pass


Hot, Drink = get_sample_classes(Specification)

water = {"name": "water", "temperature": "cold", "state": "fluid"}
msg = "Calling the specification-class must return True/False"
print(Drink(water))  # is True, msg)
print(Hot(water))  # is False, msg)
print((Hot & Drink)(water))  # is False, msg)
print((Hot | Drink)(water))  # is True, msg)
print((~Hot)(water))  # is True, msg)


rows = [
    {"name": "milk", "temperature": "cold", "state": "fluid"},
    {"name": "steak", "temperature": "hot", "state": "solid"},
    {"name": "coffee", "temperature": "hot", "state": "fluid"},
    {"name": "ice-cream", "temperature": "cold", "state": "solid"},
]

cases = [
    (Drink, ["milk", "coffee"]),
    (~Drink, ["steak", "ice-cream"]),
    (Hot, ["steak", "coffee"]),
    (~Hot, ["milk", "ice-cream"]),
    (Hot & Drink, ["coffee"]),
    (~Hot & ~Drink, ["ice-cream"]),
    (Hot | ~Drink, ["steak", "coffee", "ice-cream"]),
    (~Hot | Drink, ["milk", "coffee", "ice-cream"])
]

for condition, result in cases:
    Test.assert_equals([row["name"] for row in rows if condition(row)], result)

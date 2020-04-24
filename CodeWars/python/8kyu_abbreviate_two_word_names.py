# Write a function to convert a name into initials. This kata strictly
# takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# Patrick Feeney => P.F
def abbrevName(name):
    return '.'.join([i[0].upper() for i in name.split()])

print(abbrevName("Sam Harris")) # "S.H");
print(abbrevName("Patrick Feenan")) # "P.F");
print(abbrevName("Evan Cole")) # "E.C");
print(abbrevName("P Favuzzi")) # "P.F");
print(abbrevName("David Mendieta")) # "D.M");
def twice_as_old(f,s):
   return round(abs((0.5 - s/f)*f)*2)

print(twice_as_old(36,7) , 22)
print(twice_as_old(55,30) , 5)
print(twice_as_old(42,21) , 0)
print(twice_as_old(22,1) , 20)
print(twice_as_old(29,0) , 29)

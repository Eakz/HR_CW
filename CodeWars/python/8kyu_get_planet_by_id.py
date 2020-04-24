# https://www.codewars.com/kata/515e188a311df01cba000003

def get_planet_name(id):
    name={
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
        }
    return name[id]


print(get_planet_name(2)) # 'Venus')
print(get_planet_name(5)) # 'Jupiter')
print(get_planet_name(3)) # 'Earth')
print(get_planet_name(4)) # 'Mars')
print(get_planet_name(8)) # 'Neptune')
print(get_planet_name(1)) # 'Mercury')
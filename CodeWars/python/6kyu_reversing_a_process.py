# https://www.codewars.com/kata/5dad6e5264e25a001918a1fc

from string import ascii_lowercase as aLow

def decode(r):
    i    = next(i for i,c in enumerate(r) if c.isalpha())
    n,r  = int(r[:i]), r[i:]
    print('n',n,'\nr-',r)
    print('alow',aLow)
    maps = {chr(97 + n*i % 26): c for i,c in enumerate(aLow)}
    return "Impossible to decode" if len(maps)!=26 else ''.join(maps[c] for c in r)



# @test.describe('Tests')
     
# def fixed_tests():
#     def testing_decode(s, exp):
#         actual = decode(s)
#         Test.assert_equals(actual, exp)
        
#     @test.it('Basic Tests')
#     def basic_tests1():
print(decode('6015ekx'))
# print(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf")) # "uogbucwnddunktsjfanzlurnyxmx")
# print(decode("761328qockcouoqmoayqwmkkic")) # "Impossible to decode")
# print(decode("1544749cdcizljymhdmvvypyjamowl")) # "mfmwhbpoudfujjozopaugcb")
# print(decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp")) # "rrsxppowmjsrclfljrajtybwviqb")
        

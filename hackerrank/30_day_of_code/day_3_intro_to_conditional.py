# https://www.hackerrank.com/challenges/30-conditional-statements/problem
# solution = lambda n:"Weird" if n%2==1 or n in range(5,21) else 'Not Weird';
def solution(n): return "Weird" if n % 2 == 1 or n in range(
    5, 21) else 'Not Weird'

# https://www.codewars.com/kata/526989a41034285187000de4/train/python
def calc_ip(ip):
    listy = [*reversed(ip.split('.'))]
    return sum([int(listy[i])*(256**i) for i in range(len(listy))])


def ips_between(start, end):
    return calc_ip(end)-calc_ip(start)


print(ips_between("10.0.0.0", "10.0.0.50"), 50)
print(ips_between("20.0.0.10", "20.0.1.0"), 246)

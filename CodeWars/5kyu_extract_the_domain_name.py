# Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
#
# domain_name("http://github.com/carbonfive/raygun") == "github"
# domain_name("http://www.zombie-bites.com") == "zombie-bites"
# domain_name("https://www.cnet.com") == "cnet"

# def domain_name(url):
#     list_url= [i.split('.') for i in url.split('/')]
#     return (list_url[2][1] if list_url[2][0]=='www' else list_url[2][0]) if len(list_url)>1 else list_url[0][1]

# def domain_name(url):
#     url =url.strip('http://').strip('s://') if url.startswith('http') else url
#     url = url.strip('www.') if url.startswith('www') else url
#     return url.split('.')[0]

import re


def domain_name(url):
    return re.search('(https?://)?(www\d?\.)?(?P<name>[\w-]+)\.',
                     url).group('name')


print(domain_name("http://github.com/carbonfive/raygun"))
print(domain_name("http://www.zombie-bites.com"))
print(domain_name("www.xakep.ru"))
print(domain_name("https://youtube.com"))

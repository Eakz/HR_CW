# https://hackerrank-challenge-pdfs.s3.amazonaws.com/25168-sock-merchant-English?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1586617978&Signature=QToE%2F4kNhm8CoiJ56kfipBYyoVs%3D&response-content-disposition=inline%3B%20filename%3Dsock-merchant-English.pdf&response-content-type=application%2Fpdf

# John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# For example, there are
# socks with colors . There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is

# .

# Function Description

# Complete the sockMerchant function in the editor below.
#  It must return an integer representing the number of matching pairs of socks that are available.

# sockMerchant has the following parameter(s):

#     n: the number of socks in the pile
#     ar: the colors of each sock

# Input Format

# The first line contains an integer
# , the number of socks represented in .
# The second line contains space-separated integers describing the colors

# of the socks in the pile.

# Constraints

# where

# Output Format

# Return the total number of matching pairs of socks that John can sell.


def sockMerchant(n, ar):
    return sum([ar.count(i) // 2 for i in set(ar)])

print(sockMerchant(9,'10 20 20 10 10 30 50 10 20'))
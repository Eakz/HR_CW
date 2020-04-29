import math
import os
import random
import re
import sys


class CircleOfFriends:
    '''
    base class based on set
    '''

    def __init__(self):
        self.circles = {}  # person => parent
        self.circ_size = {}  # person => size of the circle they belong to
        self.lg_crc_size = 1

    def make_friend(self, friend_a, friend_b):
        self.probable_init(friend_a)
        self.probable_init(friend_b)

        a_circ = self.find_circle(friend_a)
        b_circ = self.find_circle(friend_b)

        if a_circ != b_circ:
            self.comb_circl(a_circ, b_circ)

    def comb_circl(self, a_circ, b_circ):
        self.circles[b_circ] = a_circ
        new_c_size = self.circ_size[a_circ] + \
            self.circ_size[b_circ]
        self.circ_size[a_circ] = new_c_size
        self.circ_size[b_circ] = new_c_size
        self.upd_lrg_crc(new_c_size)

    def find_circle(self, person):
        if self.circles[person] == person:
            # person is their own parent so they are the head of the circle.
            return person
        else:
            # path compression.
            self.circles[person] = self.find_circle(self.circles[person])
            return self.circles[person]

    def probable_init(self, person):
        if person not in self.circles:
            self.circles[person] = person
            self.circ_size[person] = 1

    def upd_lrg_crc(self, circle_size):
        if circle_size > self.lg_crc_size:
            self.lg_crc_size = circle_size


if __name__ == '__main__':
    f_circ = CircleOfFriends()
    num_queries = int(input())
    for _ in range(num_queries):
        friend_a, friend_b = tuple(map(int, input().rstrip().split()))
        f_circ.make_friend(friend_a, friend_b)
        print(f_circ.lg_crc_size)
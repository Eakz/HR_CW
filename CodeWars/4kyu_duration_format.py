# Your task in order to complete this Kata is to write a function which formats a duration, given
# as a number of seconds, in a human-friendly way.
#
# The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration
# is expressed as a combination of years, days, hours, minutes and seconds.
#
# It is much easier to understand with an example:
#
# format_duration(62)    # returns "1 minute and 2 seconds"
# format_duration(3662)  # returns "1 hour, 1 minute and 2 seconds"
#
# For the purpose of this Kata, a year is 365 days and a day is 24 hours.
#
# Note that spaces are important.
# Detailed rules
#
# The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer
# and one of the valid units of time, separated by a space. The unit of time is used in plural
# if the integer is greater than 1.
#
# The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ",
# just like it would be written in English.
#
# A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year
# is not correct, but 1 year and 1 second is.
#
# Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
#
# A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid,
# but it should be just 1 minute.
#
# A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
# but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater
# than any valid more significant unit of time.

import time
import datetime


# print(datetime.timedelta(seconds=55555555555555))

def format_duration(seconds):
    values = [('year', 31536000), ('day', 86400), ('hour', 3600), ('minute', 60)]
    year, day, hour, minute = 31536000, 86400, 3600, 60
    years, left = seconds // year, seconds % year
    days, left = left // day, left % day
    hours, left = left // hour, left % hour
    minutes, left = left // minute, left % minute
    secondss = left
    tomos = [years, days, hours, minutes, secondss]
    names = ['year', 'day', 'hour', 'minute', 'second']

    def es(stri, int):
        return str(int) + ' ' + stri if int == 1 else (
            str(int) + ' ' + stri + 's' if int > 1 else '' if int != -1 else stri)

    final = [es(names[i], tomos[i]) for i in range(5)]
    final = list(filter(lambda x: x, final))
    final.insert(-1, 'and') if len([i for i in tomos if i > 0]) > 1 else final
    if seconds != 0:
        return ' '.join(map(lambda x: x + ',' if x not in final[-3:] else x, final))
    else:
        return 'now'


print(format_duration(759301))
# print(datetime.timedelta(seconds=50000000))

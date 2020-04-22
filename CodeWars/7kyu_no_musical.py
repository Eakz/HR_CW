# In my school, a grand musical is performed every 4 years. This means that every student who comes to this school will get to see a musical performed exactly once in their 4-year stay. This is not always the case in other schools though.

# For a given duration of time, an interval after which a musical is performed, and the duration of class enrolment, can you determine how many class-years did not get to have a musical performed in their school? A musical is always performed for the start_class.

# Example:

#   no_musical(start_class = 2000, end_class = 2010, 
#   musical_performed_every = 5, duration_of_enrolment_in_school = 3) = 4  

# Explanation:

# Only the class of 2000 gets to see the musical performed in 2000. The next musical will be in 2005 so only the class of 2003 in their last year, 2004 in their second year, and 2005 in their first year, get to see it. The next musical will be in 2010 so only the class of 2008, 2009 and 2010 get to see it. This leaves us with the class of 2001, 2002, 2006 and 2007 who never get to see a musical, a total of 4 classes :(

# TO:

#     In this kata, if duration of enrolment in school is, say, 4 years, members of a class that starts in 2000 will graduate in 2003, not 2004. Their years of enrolment in the school would be 2000, 2001, 2002 and 2003. (In the standard way that we are used to the term 'class of', they would be the class of 1999 as they would graduate in 2003, but we do not do that here)
#     As seen in the example, the range is end-inclusive. The last class should also be accounted for.
#     Very minor note, we assume all the students in the school will actually go to watch the musical - not that it matters for this kata anyway. That said, I am not really a musical person :-(

# 5 sample tests, 50 randomized tests.

# Good luck.

def no_musical(classS, classE, showFreq, classT):
    nYears,deltaY = classE-classS, showFreq-classT
    if not showFreq: return nYears+1
    if deltaY<1:     return 0
    n,r = divmod(nYears, showFreq)
    return deltaY * n + min(r, deltaY)
# Use test.describe (or Test.describe) to describe your test suite
# test.describe("Musicals")

# What if the start and end year are the same?
print(no_musical(2000,2000,100,3))#, 0)

# What if the school does not do musicals?
print(no_musical(2000,3000,0,50))#, 1001)

# # What if all the students get to see musicals?
print(no_musical(2000,2020,2,4))#, 0)

# But are you doing it right though?
print(no_musical(2000, 3000, 5, 2))#, 600)
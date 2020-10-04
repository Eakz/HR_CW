// https://www.hackerrank.com/challenges/grading/problem

const gradingStudents = g =>
    g.map(g =>
        g < 38 ? g : g % 5 === 0 ? g : g % 5 < 3 ? g : g + 5 - (g % 5),
    );

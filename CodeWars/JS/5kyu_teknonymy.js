/**
1. No descendants - no teknonym
2. A direct descendant of X is any member, but X, of the subtree rooted at X.
3. If X has some direct descendants : the teknonym is built according to the sex of X and the 
name of the elder among its direct descendants of the most distant generation from X.
4.The 'generation distance' between X and one of its descendant, say Y, is the number of levels between X and Y.
So you have to :
Find the most distant generation
Find the elder of that generation
Build the teknonym of X according to the two previous informations.
There won't be any ambiguity to determine who is the elder between two direct descendants of someone.
The possible teknonyms are (all lower case):
'father of Y', 'grandfather of Y', 'great-grandfather of Y', 'great-great-grandfather of Y', and so on ;
'mother of Y', 'grandmother of Y', 'great-grandmother of Y', 'great-great-grandmother of Y', and so on ;
 */

function teknonymize(familyTree) {
  
    function iterateTree(obj, depth = 0) {

        let objOut = {};
        objOut.depth = depth;
        objOut.dateOfBirth = obj.dateOfBirth;
        objOut.name = obj.name;

        obj.children.forEach(child => {
            let obj2 = iterateTree(child, depth + 1);

            if (obj2.depth > objOut.depth) {
                objOut.depth = obj2.depth;
                objOut.name = obj2.name;
                objOut.dateOfBirth = obj2.dateOfBirth;
            }
            if (obj2.depth == objOut.depth && obj2.dateOfBirth < objOut.dateOfBirth) {
                objOut.dateOfBirth = obj2.dateOfBirth;
                objOut.name = obj2.name;
            }

        });

        if (depth < objOut.depth) {
            if (obj.sex == 'm') {
                if (objOut.depth - depth == 1) {
                    obj.teknonym = 'father of ' + objOut.name;
                }
                if (objOut.depth - depth > 1) {
                    obj.teknonym = 'great-'.repeat(objOut.depth - depth - 2) + 'grandfather of ' + objOut.name;
                }

            }
            if (obj.sex == 'f') {
                if (objOut.depth - depth == 1) {
                    obj.teknonym = 'mother of ' + objOut.name;
                }
                if (objOut.depth - depth > 1) {
                    obj.teknonym = 'great-'.repeat(objOut.depth - depth - 2) + 'grandmother of ' + objOut.name;
                }
            }
        }

        return objOut;
    }


    iterateTree(familyTree)
}

const example1 = {
    name: 'a',
    teknonym: '',
    dateOfBirth: '1000-01-01T00:00:00.000Z',
    sex: 'm',
    children: [
        {
            name: 'b',
            teknonym: '',
            dateOfBirth: '1020-01-01T00:00:00.000Z',
            sex: 'f',
            children: [
                {
                    name: 'h',
                    teknonym: '',
                    dateOfBirth: '1047-01-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
            ],
        },
        {
            name: 'c',
            teknonym: '',
            dateOfBirth: '1021-02-01T00:00:00.000Z',
            sex: 'm',
            children: [],
        },
        {
            name: 'd',
            teknonym: '',
            dateOfBirth: '1023-11-28T00:00:00.000Z',
            sex: 'm',
            children: [
                {
                    name: 'e',
                    teknonym: '',
                    dateOfBirth: '1043-11-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
                {
                    name: 'f',
                    teknonym: '',
                    dateOfBirth: '1045-01-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
                {
                    name: 'g',
                    teknonym: '',
                    dateOfBirth: '1046-01-01T00:00:00.000Z',
                    sex: 'm',
                    children: [],
                },
            ],
        },
    ],
};
const example2 = {
    name: 'a',
    teknonym: '',
    dateOfBirth: '1000-01-01T00:00:00.000Z',
    sex: 'm',
    children: [
        {
            name: 'b',
            teknonym: '',
            dateOfBirth: '1020-01-01T00:00:00.000Z',
            sex: 'f',
            children: [
                {
                    name: 'h',
                    teknonym: '',
                    dateOfBirth: '1047-01-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
            ],
        },
        {
            name: 'c',
            teknonym: '',
            dateOfBirth: '1021-02-01T00:00:00.000Z',
            sex: 'm',
            children: [],
        },
        {
            name: 'd',
            teknonym: '',
            dateOfBirth: '1023-11-28T00:00:00.000Z',
            sex: 'm',
            children: [
                {
                    name: 'e',
                    teknonym: '',
                    dateOfBirth: '1043-11-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
                {
                    name: 'f',
                    teknonym: '',
                    dateOfBirth: '1045-01-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
                {
                    name: 'g',
                    teknonym: '',
                    dateOfBirth: '1046-01-01T00:00:00.000Z',
                    sex: 'm',
                    children: [],
                },
            ],
        },
    ],
};
const expected1 = {
    name: 'd',
    teknonym: 'father of e',
    dateOfBirth: '1023-11-28T00:00:00.000Z',
    sex: 'm',
    children: [
        {
            name: 'e',
            teknonym: '',
            dateOfBirth: '1043-11-01T00:00:00.000Z',
            sex: 'f',
            children: [],
        },
        {
            name: 'f',
            teknonym: '',
            dateOfBirth: '1045-01-01T00:00:00.000Z',
            sex: 'f',
            children: [],
        },
        {
            name: 'g',
            teknonym: '',
            dateOfBirth: '1046-01-01T00:00:00.000Z',
            sex: 'm',
            children: [],
        },
    ],
};
const expected2 = {
    name: 'a',
    teknonym: 'grandfather of e',
    dateOfBirth: '1000-01-01T00:00:00.000Z',
    sex: 'm',
    children: [
        {
            name: 'b',
            teknonym: 'mother of h',
            dateOfBirth: '1020-01-01T00:00:00.000Z',
            sex: 'f',
            children: [
                {
                    name: 'h',
                    teknonym: '',
                    dateOfBirth: '1047-01-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
            ],
        },
        {
            name: 'c',
            teknonym: '',
            dateOfBirth: '1021-02-01T00:00:00.000Z',
            sex: 'm',
            children: [],
        },
        {
            name: 'd',
            teknonym: 'father of e',
            dateOfBirth: '1023-11-28T00:00:00.000Z',
            sex: 'm',
            children: [
                {
                    name: 'e',
                    teknonym: '',
                    dateOfBirth: '1043-11-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
                {
                    name: 'f',
                    teknonym: '',
                    dateOfBirth: '1045-01-01T00:00:00.000Z',
                    sex: 'f',
                    children: [],
                },
                {
                    name: 'g',
                    teknonym: '',
                    dateOfBirth: '1046-01-01T00:00:00.000Z',
                    sex: 'm',
                    children: [],
                },
            ],
        },
    ],
};
// console.log(teknonymize(example1), expected1);
console.log(teknonymize(example2), expected2);

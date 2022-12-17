// https://www.codewars.com/kata/639ac3ded3fb14000ed38f31/train/javascript

function findCoordinates(plane) {
    var r = {}, m=plane.split('\n').reverse();
    for (let j=0; j<m.length; j++) for (let i=0; i<m[j].length; i++) if (/\d/.test(m[j][i])) r[m[j][i]]=[j,(i-j-1)/2];
    return Array.from({...r, length: Object.keys(r).length});
  }

if (require.main.path.includes('mocha')) {
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;

    describe('Solution tests', function () {
        describe('Sample tests', function () {
            it('Coordinates across the width', () => {
                act(
                    `
        / / / /
       / / / /
      /0/1/2/
      `,
                    [
                        [0, 0],
                        [0, 1],
                        [0, 2],
                    ],
                );
            });

            it('Coordinates across the length', () => {
                act(
                    `
        /2/ / /
       /1/ / /
      /0/ / /
      `,
                    [
                        [0, 0],
                        [1, 0],
                        [2, 0],
                    ],
                );
            });

            it('Coordinates across the 2d height', () => {
                act(
                    `
        /1/ / /
       / / / /
      / /0/ /
      `,
                    [
                        [0, 1],
                        [2, 0],
                    ],
                );
            });

            it('Coordinates outside plane', () => {
                act(
                    `
       1/ / / /
      0/ / / /3
      / / / /2  
      `,
                    [
                        [1, -1],
                        [2, -1],
                        [0, 3],
                        [1, 3],
                    ],
                );
            });
        });

        function normalise(plane) {
            const grid = plane
                .split('\n')
                .map(r => r.trimEnd())
                .filter(r => r.length);
            const l =
                grid[grid.length - 1].length - grid[grid.length - 1].trimStart().length;
            const w = Math.max(...grid.map(r => r.length));
            return grid.map(r => (r + ' '.repeat(w - r.length)).slice(l)).join('\n');
        }

        function act(plane, expected) {
            plane = normalise(plane);
            const userSolution = findCoordinates(plane);
            assert.deepEqual(userSolution, expected);
        }
    });
} else {
    console.log(
        findCoordinates(`
    /2/ / /
   /1/ / /
  /0/ / /
  `),
        [
            [0, 0],
            [0, 1],
            [0, 2],
        ],
    );
}

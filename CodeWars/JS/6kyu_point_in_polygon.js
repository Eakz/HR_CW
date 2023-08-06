//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
    const x = point[0], y = point[1];
    
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];
        
        const intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
}

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            //Test a square
            var poly = [
                [-5, -5],
                [5, -5],
                [5, 5],
                [-5, 5],
            ];
            Test.equal(pointInPoly(poly), [-6, 0]);
            Test.notEqual(pointInPoly(poly), [1, 1]);
        });
    });
}

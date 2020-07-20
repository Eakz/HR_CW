// https://www.codewars.com/kata/579f22eee298a765f8000269/train/javascript

const distribution=function(size) {
    let side = Math.ceil((2+2*size)**.5-1);
    side += (side+1)*(side+1>>1) < size
    let M = Array(side).fill(0);
    M = M.map(_=>M.slice());
    
    let dirs=[[1,0,side-1], [0,1,2], [-1,0,side-1], [0,1,2]];
    let x=0, y=0, i=0, n=side-1, dx=1, dy=0;
    while(size-->0){
      M[x][y]=1;
      if(!n) [dx,dy,n] = dirs[i=(++i)%4];
      x+=dx; y+=dy; n--;
    }
    return M;
  }

const CONFIG = [
    [
        5,
        [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1],
        ],
    ],
    [
        8,
        [
            [1, 0, 0, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
        ],
    ],
    [
        31,
        [
            [1, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1],
        ],
    ],
];
for (let [n, exp] of CONFIG) {
    console.log(distribution(n), `Answer is ${exp}`);
}

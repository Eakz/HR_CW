// https://leetcode.com/problems/node-with-highest-edge-score/

function edgeScore(edges: number[]): any {
    const sums:number[] = [];
    edges.forEach((value, index) => {
        sums[value] = (sums[value] || 0) + index;
    });
    let result=0;
    let max = 0
    sums.forEach((value,index)=>{
        if(typeof value==='number'&&value>max){
            max=value
            result=index
        }
    })
    return result
}

console.log(edgeScore([1, 0, 0, 0, 0, 7, 7, 5]), 7);
console.log(edgeScore([2, 0, 0, 2]), 0);

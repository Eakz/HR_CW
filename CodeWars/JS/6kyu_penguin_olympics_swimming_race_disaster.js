// https://www.codewars.com/kata/6022c97dac16b0001c0e7ccc/train/javascript


const calculateWinners = (s,p)=>{
    const v={'~':2,'-':1,'|':0}
    const scores = s.toLowerCase().split('\n').map((e,i)=>({name:p[i],value:[...e.split('p').slice(-1)[0]].reduce((a,e)=>a+v[e],0)})).sort((a,b)=>a.value-b.value).map(e=>e.name)
    return `GOLD: ${scores[0]}, SILVER: ${scores[1]}, BRONZE: ${scores[2]}`
}
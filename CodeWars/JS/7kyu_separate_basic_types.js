// https://www.codewars.com/kata/60113ded99cef9000e309be3/train/javascript

const separateTypes = a=>{
    const result={}
    a.forEach(e=>{
        if(result[typeof(e)]){
            result[typeof(e)].push(e)
        }else{
            result[typeof(e)]=[e]
        }
    })
    return result
}
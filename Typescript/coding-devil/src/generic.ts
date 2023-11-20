
function getSize(arr:number[]|string[]|boolean[]|object[]):number{
    return arr.length
}

console.log(getSize([1,2,3,4,5]))
console.log(getSize(['a','b','c']))
console.log(getSize([false,true,true]))
console.log(getSize([{},{},{name:"tim"}]))


//getSize()인수들을  generic사용

function getSize2<T>(arr:T[]):number{
    return arr.length
}

console.log(getSize2<number>([1,2,3,4,5]))
console.log(getSize2<string>(['a','b','c']))
console.log(getSize2<boolean>([false,true,true]))
console.log(getSize2<object>([{},{},{name:"tim"}]))

//화살표함수
const getSize3=<T>(arr:T[]):number=>{
    return arr.length
}

console.log(getSize3<number|string>([1,2,3,4,5]))
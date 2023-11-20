//필수,선택적매개변수 순서대로 작성
function hello(age:number,name?:string):string{
    return `Hello ${name||'KIM~'}. You are ${age}`
}

//default매개변수
function hello2(name="world"){
    return `Hello ${name}`
}

//나머지 매개변수
function add(...nums:number[]){
    return nums.reduce((result,num)=>result+num,0)
}
//화살표형
const add2 = (...nums:number[]):number=>{
    return nums.reduce((result,num)=>result+num,1)
}

console.log(hello(25))
console.log(hello2('lee'))
console.log(add(1,2,3,4,5))
console.log(add2(1,2,3,4,5))
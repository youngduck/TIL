interface Mobile<T>{
    name:string,
    price:number
    option:T,
}

const m1 :Mobile<{color:string,coupon:boolean}>={
    name:'s21',
    price:1000,
    option:{
        color:'red',
        coupon:false
    }
}

const m2 :Mobile<string>={
    name:'s20',
    price:900,
    option:'good'
}

//function

interface User2{
    name:string,
    age:number,
}
interface Car2{
    name:string,
    color:string,
}
interface Book2{
    price:number,
}

const u1:User2={name:'kim',age:25}
const c2:Car2={name:'bmw',color:'red'}
const b2:Book2={price:2000}


const showName1=<T extends {name:string}>(data:T):string=>{
    return data.name
}

console.log(showName1(u1))
console.log(showName1(c2))
//showName1(b2)

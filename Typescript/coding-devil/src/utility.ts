
interface User3{
    id:number,
    name:string,
    age:number,
    gender:'m'|'f'
}

//keyof A → A의 모든 프로퍼티의 키값을 union 형태로 반환 'id'|'name'|'age'|'gender'
type UserKey=keyof User3  
const uk:UserKey="name"


//Partial<T>
let admin:Partial<User3>={
    id:1,
    name:'bob'
}

//Required<T>
let admin2:Required<User3>={
    id:1,
    name:'k',
    age:14,
    gender:'m'
}

//Readonly<T>
let admin3:Readonly<User3>={
    id:1,
    name:'bob',
    age:26,
    gender:'f'
}
console.log(admin3.id)
//admin3.id=2

//Record<K,T> K=key,T=type

//레코드사용전
interface Score{
    '1':'A'|'B'|'C'|'D',
    '2':'A'|'B'|'C'|'D',
    '3':'A'|'B'|'C'|'D',
    '4':'A'|'B'|'C'|'D'
}
const score:Score = {
    1:'A',
    2:'B',
    3:'C',
    4:'D'
}
//레코드사용후
type Grade=1|2|'3'|'4'
type Score2='A'|'B'|'C'|'D'|'F'

const score2:Record<Grade,Score2>={
    1:'A',
    2:'B',
    3:'C',
    4:'D',
}

interface User4{
    id:number,
    name:string,
    age:number,
}


function isValid(user:User4){
    const result:Record<keyof User4,boolean>={
        id:user.id>0,
        name:user.name !=='',
        age:user.age>0
    }
    return result
}

const aa:User4={
    id:5,
    name:'kim',
    age:25
}

console.log(isValid(aa))

//Pick<T,K>

const pickAd:Pick<User3,'id'|'name'>={
    id:0,
    name:'park'
}

//Omit<T,K>
const omitAd:Omit<User3,'age'|'gender'>={
    id:5,
    name:'bbb'
}

//Exclude<T1,T2> 타입간 제거
type T1=string|number|boolean
type T2=Exclude<T1,number|boolean>

//NonNullable<Type>
type T3=string|null|undefined|void
type T4=NonNullable<T3>
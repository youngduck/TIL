type score = 'A'|'B'|'C'|'F'

interface User{
    name:string
    age:number
    gender?:string
    readonly birthYear:number
    [grade:number]:score
}

let user : User={
    name:'xx',
    age:30,
    birthYear:2000,
    1:'A',
    3:'C'
}

user.age=20
user.gender='male'


console.log(user.age)
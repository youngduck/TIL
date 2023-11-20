interface UserName{
    name:string
    age:number
}
const Sam: UserName ={
    name:'Sam',
    age:21,
}

//this
function showName(this:UserName,age:number,gender:'m'|'f'){
    console.log(this.name,this.age,age,gender)
}

const a = showName.bind(Sam)
a(20,'m')

function join(name:string,age:number):UserName
function join(name:string,age:string):string
function join(name:string,age:number|string):UserName|string{
    if(typeof age === "number"){
        return{
            name,
            age,
        }
    }
    else{
        return "나이는 숫자로 입력해주세요."
    }
}

const kim:UserName=join('kim',25)
const jane:UserName=join("jane",20)

console.log(kim)
console.log(jane)

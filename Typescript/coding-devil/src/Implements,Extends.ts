interface Car{
    color:string
    wheels:number
    start():void
}

//implements
class Bmw implements Car{
    color
    wheels=4
    constructor(c:string){
        this.color=c
    }
    start(){
        console.log('gogogo')
    }
}

//extends
interface Benz extends Car{
    door:number
    stop():void
}


const b = new Bmw('green')
console.log(b)
b.start()

const benz:Benz={
    color:'red',
    wheels:5,
    start(){
        console.log('출발합니다')
    },
    door:5,
    stop(){
        console.log('stop')
    }
}
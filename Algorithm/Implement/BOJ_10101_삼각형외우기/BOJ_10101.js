const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = ''
const angleList = input.map(Number)
const is180 = angleList.reduce((acc,cur)=>acc+cur,0)
const angleSetSize = new Set(angleList).size


if(is180===180){
  switch(angleSetSize){
    case 1:result='Equilateral'; break;
    case 2:result='Isosceles'; break;
    case 3:result='Scalene'; break;
    default: break;
  }  
}
else{
  result='Error'
}

console.log(result)
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const resultList = []


for(let i = 1; i<input.length;i++){
  const stackArr = []
  const data=[...input[i]]
  let flag = 'YES'
 
  for(let j = 0; j<data.length-1; j++){
  
    if(data[j]==='(') stackArr.push('(')
    else{
      if(!Boolean(stackArr.pop())){
        flag='NO'
        break;
      }
    }
  }
  if(stackArr.length!==0){
    flag='NO'
  }
  resultList.push(flag)
}
resultList.map(item=>console.log(item))

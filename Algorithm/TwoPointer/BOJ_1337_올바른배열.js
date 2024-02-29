const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const numList = input.slice(1).map(Number).sort((a,b)=>(a-b))



const solution=(numList)=>{
  let result = []

  let left = 0;
  let right = 0;
  while(right<numList.length){
    let dis = numList[right]-numList[left]
  
    if(dis<5){
      right++
    }
    else{
      result.push(right-left)
      left++
      right=left
    }
    if (right===numList.length){
      result.push(right-left)
    }
  }

  console.log(5-Math.max(...result))
}

solution(numList)

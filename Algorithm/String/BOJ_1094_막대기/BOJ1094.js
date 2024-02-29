const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0]

const solution=(n) =>{

  console.log([...n.toString(2)].filter((item)=>item==='1').length)

}

solution(n)

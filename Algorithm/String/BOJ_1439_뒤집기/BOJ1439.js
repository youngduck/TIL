const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");




const result =Math.min(input[0].split('0').filter(item=>item!=='').length,input[0].split('1').filter(item=>item!=='').length)

console.log(result)


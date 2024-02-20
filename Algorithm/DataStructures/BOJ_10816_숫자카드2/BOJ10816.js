const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const Mlist = input[1].split(' ').map(item=>+item)
const Nlist = input[3].split(' ').map(item=>+item)

const cardMap = new Map()
const result = []

Mlist.map((item)=>{
  cardMap.has(item)?cardMap.set(item,cardMap.get(item)+1):cardMap.set(item,1)
})

Nlist.map((item)=>{
  result.push(cardMap.get(item)?cardMap.get(item):0)
})
console.log(result.join(' '))

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0]
const arr =[]
for(let i = 1; i<input.length;i++){
  arr.push([...input[i].trim()].map(Number))
}

const Quad= (x,y,n)=>{
  let flagSum=0

  for(let i = 0; i<n; i++){
    for(let j = 0; j< n; j++){
      flagSum+=arr[i+x][j+y];
    }
  }

  if (flagSum===0) {
    process.stdout.write('0')
  }

  else if(flagSum===n*n){
    process.stdout.write('1')
  }

  else{
    process.stdout.write('(')
    Quad(x,y,n/2) //0~4
    Quad(x,y+n/2,n/2)//4~4
    Quad(x+n/2,y,n/2)
    Quad(x+n/2,y+n/2,n/2)
    process.stdout.write(')')
  }

}



const solution = (n,arr)=>{

  Quad(0,0,n)

}

solution(n,arr)

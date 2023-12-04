const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(`         ,r'"7`);
console.log("r`-_   ,'  ,/");
console.log(` \\. ". L_r'`);
console.log("   `~\\/");
console.log("      |");
console.log("      |");

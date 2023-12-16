const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [r, M] = [31n, 1234567891n];

const result = [...input[1]].map((item, idx) => {
	let alphabetIndex = BigInt(item.charCodeAt() - 96);
	let bigIdx = BigInt(idx);

	return alphabetIndex * r ** bigIdx;
});
console.log(Number(result.reduce((acc, cur) => acc + cur) % M));

const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map((item) => +item);

const range = new Array(n).fill(1).map((item, idx) => item + idx);
let idx = 1;
let result = [];
while (range.length > 0) {
	if (idx % k === 0) {
		result.push(range.shift());
	} else {
		range.push(range.shift());
	}
	idx += 1;
}
console.log("<" + result.join(", ") + ">");

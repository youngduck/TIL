const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, r] = input[0].split(" ").map((item) => +item);

const range = (number) => {
	const arr = new Array(number).fill(1).map((item, idx) => item + idx);
	return arr;
};

const factorial = (array) => {
	const result = array.reduce((acc, cur) => {
		return acc * cur;
	}, 1);
	return result;
};

//배열
n_array = range(n);
r_array = range(r);
n_r_array = range(n - r);

//팩토리얼 계산
const n_factorial = factorial(n_array);
const r_factorialfactorial = factorial(r_array);
const n_r_factorialfactorial = factorial(n_r_array);

//이항계수값
console.log(n_factorial / r_factorialfactorial / n_r_factorialfactorial);

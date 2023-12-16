const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//초기난이도는 0
let result = 0;

const n = +input[0].trim();

if (n === 0) {
	console.log(result);
} else {
	const levels_list = input
		.slice(1)
		.map((item) => +item)
		.sort((a, b) => a - b);

	const cut_num = Math.round(n * 0.15) * 2;

	const average = levels_list
		.sort((a, b) => a - b)
		.slice(cut_num / 2)
		.slice(0, levels_list.length - cut_num)
		.reduce((acc, cur) => acc + cur, 0);

	result = Math.round(average / (n - cut_num));
	console.log(result);
}

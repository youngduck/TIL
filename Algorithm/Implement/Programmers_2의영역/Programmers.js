const solution = (arr) => {
	let firstIndex = arr.indexOf(2);
	let lastIndex = arr.lastIndexOf(2);

	if (firstIndex === -1) {
		return [-1];
	} else {
		return arr.slice(firstIndex, lastIndex + 1);
	}
};

console.log(solution([1, 1, 1]));

//[1, 2, 1]
// [1, 1, 1]
// [1, 2, 1, 2, 1, 10, 2, 1]
// [1, 2, 1, 4, 5, 2, 9]]

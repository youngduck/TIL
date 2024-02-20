const array = [1,2,3,4,5]

//concat 배열반환
const concatArray = array.concat([1,2])
//concatArray [1,2,3,4,5,1,2] array [1,2,3,4,5]
console.log(concatArray,array,array.concat([1,2]))

//push 배열의 길이 반환, 배열을 넣을시 하나로 들어감
const pushArray = array.push([1,2])
console.log(pushArray,array,array.push([1,2]))

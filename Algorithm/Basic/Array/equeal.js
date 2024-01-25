let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]


//배열은 참조형변수로 자바스크립트는 해쉬값을 비교한다
console.log(arr1===arr2) //false
console.log(JSON.stringify(arr1)===JSON.stringify(arr2)) //true


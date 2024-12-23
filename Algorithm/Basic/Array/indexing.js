const arr = ["a", "b", "c", "a", "d"];
//좌측에서
arr.indexOf("a", 1); // 반환값 : 3
arr.indexOf("a"); // 반환값 : 0
//우측에서
arr.lastIndexOf("a", 2); // 반환값 : 0
arr.lastIndexOf("a"); //반환값: 3

//findIndex 콜백함수로 호출
arr.findIndex((item) => item === "c");

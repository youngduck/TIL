const fn = require("./fn");

//callback 함수 테스트 - 비동기 코드를 기다리게 하기위해 done 키워드를 사용.
test("3초 후 받아온 이름이 Mike", (done) => {
  function getNameCallback(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }

  fn.getName(getNameCallback);
});

// Promise를 반환하는 함수의 경우 1 - done 사용없이 return을 사용
test("3초 후 받아온 나이는 30", () => {
  return fn.getAgeResolves().then((age) => {
    expect(age).toBe(30);
  });
});

//Promise를 반환하는 함수의 경우 2 - Matcher(resolves,rejects)를 사용
test("3초 후 받아온 데이터는 성공값 30", () => {
  return expect(fn.getAgeResolves()).resolves.toBe(30);
});

test("3초 후 받아온 데이터는 에러", () => {
  return expect(fn.getAgeRejects()).rejects.toMatch("error");
});

//Promise를 반환하는 함수의 경우 3 - Async Await 방식
test("3초 후 받아온 데이터는 성공값 30 async await", async () => {
  const age = await fn.getAgeResolves();
  return expect(age).toBe(30);
});

//Promise를 반환하는 함수의 경우 4 - Async Await 축약형
test("3초 후 받아온 데이터는 성공값 30 async await 축약", async () => {
  await expect(fn.getAgeResolves()).resolves.toBe(30);
});

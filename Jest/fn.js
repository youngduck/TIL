const fn = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAgeResolves: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
  getAgeRejects: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("error");
      }, 3000);
    });
  },
};

module.exports = fn;

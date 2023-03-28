class MyClass {
  constructor() {
    console.log("initiate");
  }

  sayHello(str) {
    console.log(str);
  }

  add(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
  }

  callAnotherFn(arg1, arg2) {
    this.sayHello("Hello world");
    var result = this.add(arg1, arg2);
    return result;
  }

  callTheCallback(callback) {
    callback();
  }

  async testPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(3), 1000);
    })
      .then((result) => {
        return result * 2;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = MyClass;

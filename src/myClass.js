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

  testPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(3), 500);
    }).then(function (result) {
      return result * 2;
    });
  }
}

module.exports = MyClass;

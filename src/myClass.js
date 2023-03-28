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
}

module.exports = MyClass;

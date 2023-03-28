var chai = require("chai"); // Assertion library
var sinon = require("sinon"); // Mocking library

// Use chai.expect as expect
var expect = chai.expect;

var MyClass = require("../src/myClass.js");
var myObj = new MyClass();

// 'describe' creates a test suite for a set of related tests
describe.skip("Test suit", () => {
  // 'it' creates an individual test case within the suite
  it("Test the add method", () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });

  it("Spy the add method", () => {
    var spy = sinon.spy(myObj, "add");
    var arg1 = 10;
    var arg2 = 20;
    myObj.callAnotherFn(arg1, arg2);
    // sinon.assert.calledOnce(spy);
    expect(spy.calledOnce).to.be.true;
    // sinon.assert.calledTwice(spy);
    expect(spy.calledWith(arg1, arg2)).to.be.true;
  });

  it("Spy the callback method", () => {
    var callback = sinon.spy();
    myObj.callTheCallback(callback);
    expect(callback.calledOnce).to.be.true;
  });

  it("Mock the sayHello method", () => {
    // Mock the object
    var mock = sinon.mock(myObj);
    // Expectation
    var expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("Hello world");
    // Call the function
    myObj.callAnotherFn(10, 20);
    // Verify expectations
    mock.verify();
  });
});

describe.skip("Test suit for stub", () => {
  it("Stub the add method", () => {
    // Stub helps you to simulate the values that are returned by a function
    var stub = sinon.stub(myObj, "add");
    stub
      .withArgs(10, 20)
      .onFirstCall()
      .returns(100)
      .onSecondCall()
      .returns(200);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
  });
});

describe("Test the promise", () => {
  it("Promise test case", function (done) {
    // 'timeout' set the time to wait in the test
    // In this case, the timeout is setted to 0 so it disables the timeout for the test, so it will wait indefinitely for the promise resolve
    this.timeout(0);

    // In Mocha testing, 'done' is a way to handle asynchronous code and is used to signal the completion of an asynchronous test
    myObj
      .testPromise()
      .then((result) => {
        expect(result).to.be.equal(6);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

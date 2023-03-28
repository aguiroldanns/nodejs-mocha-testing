var chai = require("chai");
var sinon = require("sinon");

var expect = chai.expect;

var MyClass = require("../src/myClass.js");
var myObj = new MyClass();

// Describe is the test suit and it is the test case

describe.skip("Test suit", () => {
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
    var mock = sinon.mock(myObj);
    var expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("Hello world");
    myObj.callAnotherFn(10, 20);
    mock.verify();
  });
});

describe.skip("Test suit for stub", () => {
  it("Stub the add method", () => {
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
  it("Promist test case", function (done) {
    // You use the parameter 'done' (that is a function) to indicates that the promise is finished
    this.timeout(0); // The test wait until the promise finish
    myObj
      .testPromise()
      .then(function (result) {
        expect(result).to.be.equal(61);
        done();
      })
      .catch(done);
  });
});

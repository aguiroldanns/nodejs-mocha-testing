var chai = require("chai");
var sinon = require("sinon");

var expect = chai.expect;

var MyClass = require("../src/myClass.js");
var myObj = new MyClass();

describe("Test suit", () => {
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
});

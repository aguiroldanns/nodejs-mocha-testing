var chai = require("chai");
var expect = chai.expect;

var MyClass = require("../src/myClass.js");
var myObj = new MyClass();

describe("Test suit", () => {
  it("Test the add method", () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });
});

"use strict";
const _ = require("lodash");
const assert = require("assert");

let array = [1, 3, 5, 6, 8];
const chunkArr = _.chunk(array, 2);
console.log(chunkArr);

const reverseArr = _.reverse(array);
console.log(reverseArr);

const withoutArr = _.without(array, 5);
console.log(withoutArr);

const logInitial = _.initial(array);
console.log(logInitial);

const flatArr = _.flatten(chunkArr);
console.log(flatArr);

// TESTS:

if (typeof describe === "function") {
  describe("chunk test", () => {
    it("should chunk the dataArr", () => {
      assert.deepEqual(chunkArr, [[1, 3], [5, 6], [8]]);
    });
  });
  describe("reverse test", () => {
    it("should reverse the dataArr", () => {
      assert.deepEqual(reversed, [8, 6, 5, 3, 1]);
    });
  });

  describe("without 5 test", () => {
    it("should remove 5 from the dataArr", () => {
      assert.deepEqual(withoutArr, [8, 6, 3, 1]);
    });
  });

  describe("initial test", () => {
    it("should drop the first value in the dataArr", () => {
      assert.deepEqual(logInitial, [8, 6, 5, 3]);
    });
  });

  describe("join test", () => {
    it("should flatten the dataArr into a single array", () => {
      assert.deepEqual(flatArr, [1, 3, 5, 6, 8]);
    });
  });
} else {
  console.log("not working");
}

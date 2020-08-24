const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]", () => {
    const inputOne = [1, 2, 3, 4, 5];
    const inputTwo = [1, 2, 3, 4, 5];
    const expected = true;

    assert.deepEqual(eqArrays(inputOne, inputTwo), expected);
  });

  it("returns true for [1, [2, [3], [4, 5]]], [1, [2, [3], [4, 5]]]", () => {
    const inputOne = [1, [2, [3], [4, 5]]];
    const inputTwo = [1, [2, [3], [4, 5]]];
    const expected = true;

    assert.deepEqual(eqArrays(inputOne, inputTwo), expected);
  });

  it("returns false for [1, [2, [3], [4, 5]], [6, 7]], [1, [2, [3], [4, 5]], [6, [7]]]", () => {
    const inputOne = [1, [2, [3], [4, 5]], [6, 7]];
    const inputTwo = [1, [2, [3], [4, 5]], [6, [7]]];
    const expected = false;

    assert.deepEqual(eqArrays(inputOne, inputTwo), expected);
  });

  it("returns true for [1, [2, [3], [4, 5]], []], [1, [2, [3], [4, 5]], []]", () => {
    const inputOne = [1, [2, [3], [4, 5]], []];
    const inputTwo = [1, [2, [3], [4, 5]], []];
    const expected = true;

    assert.deepEqual(eqArrays(inputOne, inputTwo), expected);
  });

  it("returns true for [], []", () => {
    const inputOne = [];
    const inputTwo = [];
    const expected = true;

    assert.deepEqual(eqArrays(inputOne, inputTwo), expected);
  });

});
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it("returns { \'1\': 2 } for [1, 1, 2, 4, 5], [1]", () => {
    const inputOne = [1, 1, 2, 4, 5]
    const inputTwo =  [1];
    const expected = { '1': 2 };

    assert.deepEqual(countOnly(inputOne, inputTwo), expected);
  });

  it("returns { 'word': 3, 'book': 2 } for [1, 'word', 'word', 'book', 'word', 'book', 'thing'], ['word', 'book']", () => {
    const inputOne = [1, 'word', 'word', 'book', 'word', 'book', 'thing'];
    const inputTwo =  ['word', 'book'];
    const expected = { 'word': 3, 'book': 2 };

    assert.deepEqual(countOnly(inputOne, inputTwo), expected);
  });

  it("returns { '1': 1, '2': 1, '3': 1 } for [1, 2, 3], [1, 2, 3]", () => {
    const inputOne = [1, 2, 3];
    const inputTwo =  [1, 2, 3];
    const expected = { '1': 1, '2': 1, '3': 1 };

    assert.deepEqual(countOnly(inputOne, inputTwo), expected);
  });

  it("returns {} for [], [1, 2, 3]", () => {
    const inputOne = [];
    const inputTwo =  [1, 2, 3];
    const expected = {};

    assert.deepEqual(countOnly(inputOne, inputTwo), expected);
  });

  it("returns {} for [1, 2, 3], []", () => {
    const inputOne = [1, 2, 3];
    const inputTwo =  [];
    const expected = {};

    assert.deepEqual(countOnly(inputOne, inputTwo), expected);
  });

});
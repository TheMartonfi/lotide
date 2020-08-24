const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("returns [1, 2, 3, 4] for [1, 2, [3, 4]]", () => {
    const input = [1, 2, [3, 4]];
    const expected = [1, 2, 3, 4];

    assert.deepEqual(flatten(input), expected);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7] for [1, 2, [3, 4], 5, [6, 7]]", () => {
    const input = [1, 2, [3, 4], 5, [6, 7]];
    const expected = [1, 2, 3, 4, 5, 6, 7];

    assert.deepEqual(flatten(input), expected);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7] for [1, [2], [3, 4], 5, [6, 7]]", () => {
    const input = [1, [2], [3, 4], 5, [6, 7]];
    const expected = [1, 2, 3, 4, 5, 6, 7];

    assert.deepEqual(flatten(input), expected);
  });

  it("returns [1, 2] for [[1], [2]]", () => {
    const input = [[1], [2]];
    const expected = [1, 2];

    assert.deepEqual(flatten(input), expected);
  });

  it("returns [] for []", () => {
    const input = [];
    const expected = [];

    assert.deepEqual(flatten(input), expected); 
  });

});
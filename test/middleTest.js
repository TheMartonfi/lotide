const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expected = [2];

    assert.deepEqual(middle(input), expected);
  });

  it("returns [] for [1, 2]", () => {
    const input = [1, 2];
    const expected = [];

    assert.deepEqual(middle(input), expected);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = [3, 4];

    assert.deepEqual(middle(input), expected);
  });

  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const expected = [4];

    assert.deepEqual(middle(input), expected);
  });

  it("returns [] for []", () => {
    const input = [];
    const expected = [];

    assert.deepEqual(middle(input), expected); 
  });

});
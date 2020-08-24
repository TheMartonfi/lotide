const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns { s: [0], t: [1], r: [2], i: [3], n: [4], g: [5] } for 'string'", () => {
    const input = 'string';
    const expected = { s: [0], t: [1], r: [2], i: [3], n: [4], g: [5] };

    assert.deepEqual(letterPositions(input), expected);
  });

  it("returns { w: [0], o: [1], r: [2], d: [3] } for 'word'", () => {
    const input = 'word';
    const expected = { w: [0], o: [1], r: [2], d: [3] };

    assert.deepEqual(letterPositions(input), expected);
  });

  it("returns { o: [0, 2, 4], k: [1, 3, 5] } for 'okokok'", () => {
    const input = 'okokok';
    const expected = { o: [0, 2, 4], k: [1, 3, 5] };

    assert.deepEqual(letterPositions(input), expected);
  });

  it("returns {} for ''", () => {
    const input = '';
    const expected = {};

    assert.deepEqual(letterPositions(input), expected);
  });

  it("returns { '1': [0], '2': [1], '3': [2], '4': [3], '5': [4] } for '12345", () => {
    const input = '12345';
    const expected = { '1': [0], '2': [1], '3': [2], '4': [3], '5': [4] };

    assert.deepEqual(letterPositions(input), expected); 
  });

});
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expected = 1;

    assert.strictEqual(head(input), expected);
  });

  it("returns '5' for ['5']", () => {
    const input = ['5'];
    const expected = '5';
    
    assert.strictEqual(head(input), expected);
  });

  it("returns 'word' for ['word', 2, 3, 4, 5]", () => {
    const input = ['word', 2, 3, 4, 5];
    const expected = 'word';
    
    assert.strictEqual(head(input), expected);
  });

  it("returns true for [true, 2, 3, 4, 5]", () => {
    const input = [true, 2, 3, 4, 5];
    const expected = true;
    
    assert.strictEqual(head(input), expected);
  });

  it("returns undefined for []", () => {
    const input = [];
    const expected = undefined;
    
    assert.strictEqual(head(input), expected);
  });

});

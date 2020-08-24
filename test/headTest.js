const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'word' for ['word', 2, 3, 4, 5]", () => {
    assert.strictEqual(head(['word', 2, 3, 4, 5]), 'word'); 
  });

  it("returns true for [true, 2, 3, 4, 5]", () => {
    assert.strictEqual(head([true, 2, 3, 4, 5]), true); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

});

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true for { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 }, { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 }", () => {
    const inputOne = { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 };
    const inputTwo = { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 };
    const expected = true;

    assert.deepEqual(eqObjects(inputOne, inputTwo), expected);
  });

  it("returns false for { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 }, { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 }", () => {
    const inputOne = { name: 'Timmy', parents: { father: 'Rudy', mother: 'Of Runes' }, age: 12 };
    const inputTwo = { name: 'Timmy', parents: { father: 'Rudy' }, mother: 'Of Runes', age: 12 };
    const expected = false;

    assert.deepEqual(eqObjects(inputOne, inputTwo), expected);
  });

  it("returns true for { name: 'Timmy', parents: [['father', 'Rudy'], ['mother', 'Of Runes']], age: 12 }, { name: 'Timmy', parents: [['father', 'Rudy'], ['mother', 'Of Runes']], age: 12 }", () => {
    const inputOne = { name: 'Timmy', parents: [['father', 'Rudy'], ['mother', 'Of Runes']], age: 12 };
    const inputTwo = { name: 'Timmy', parents: [['father', 'Rudy'], ['mother', 'Of Runes']], age: 12 };
    const expected = true;

    assert.deepEqual(eqObjects(inputOne, inputTwo), expected);
  });
    
  it("returns true for { name: 'Timmy', parents: {father: 'Rudy'}, mother: 'Of Runes', age: 12 }, { name: 'Timmy', parents: {father: 'Rudy'}, mother: 'Of Runes', age: 12 }", () => {
    const inputOne = { name: 'Timmy', parents: {father: 'Rudy'}, mother: 'Of Runes', age: 12 };
    const inputTwo = { name: 'Timmy', parents: {father: 'Rudy'}, mother: 'Of Runes', age: 12 };
    const expected = true;

    assert.deepEqual(eqObjects(inputOne, inputTwo), expected);
  });
      
      it("returns true for {}, {}", () => {
        const inputOne = {};
        const inputTwo = {};
        const expected = true;
    
        assert.deepEqual(eqObjects(inputOne, inputTwo), expected);
      });

});
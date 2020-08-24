const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it("returns 'name' for { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' }, 'Timmy'", () => {
    const inputOne = { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' };
    const inputTwo = 'Timmy';
    const expected = 'name';

    assert.deepEqual(findKeyByValue(inputOne, inputTwo), expected);
  });

  it("returns 'age' for { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' }, 12", () => {
    const inputOne = { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' };
    const inputTwo = 12;
    const expected = 'age';

    assert.deepEqual(findKeyByValue(inputOne, inputTwo), expected);
  });

  it("returns 'gender' for { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' }, 'M'", () => {
    const inputOne = { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' };
    const inputTwo = 'M';
    const expected = 'gender';

    assert.deepEqual(findKeyByValue(inputOne, inputTwo), expected);
  });

  it("returns 'parents' for { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' }, 'Rudy'", () => {
    const inputOne = { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' };
    const inputTwo = 'Rudy';
    const expected = 'parents';

    assert.deepEqual(findKeyByValue(inputOne, inputTwo), expected);
  });

  it("returns undefined for { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' }, undefined", () => {
    const inputOne = { name: 'Timmy', age: 12, gender: 'M', parents: 'Rudy' };
    const inputTwo = undefined;
    const expected = undefined;

    assert.deepEqual(findKeyByValue(inputOne, inputTwo), expected);
  });

});
const eqArrays = function(actual, expected) {
  let allValues = '';
  for (let i = 0; i <= actual.length - 1; i++) {
    actual[i] === expected[i] ? allValues += 'true ' : allValues += 'false ';
  }
  return !allValues.includes('false') && actual.length === expected.length ? true : false;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  eqArrays(arrOne, arrTwo) ? console.log(`🎉 Assertion Passed: ${arrOne} === ${arrTwo}`) : console.log(`⚠️  Assertion Failed: ${arrOne} !== ${arrTwo}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['word', 2, 3], [1, 2, 3]);
assertArraysEqual(['word', 2, 3], [1, 2, 3, 4]);
assertArraysEqual(['word', 'not', 'life'], ['word', 'not', 'life']);

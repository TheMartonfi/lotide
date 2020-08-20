const assertArraysEqual = function(arrOne, arrTwo) {
  eqArrays(arrOne, arrTwo) ? console.log(`🎉 Assertion Passed: ${arrOne} === ${arrTwo}`) : console.log(`⚠️  Assertion Failed: ${arrOne} !== ${arrTwo}`);
};

const eqArrays = function(actual, expected) {
  let allValues = '';
  for (let i = 0; i <= actual.length - 1; i++) {
    actual[i] === expected[i] ? allValues += 'true ' : allValues += 'false ';
  }
  return !allValues.includes('false') && actual.length === expected.length ? true : false;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = []

  for (let elem of array) {
    results.push(callback(elem));
  }

  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map([1, 2, 3, 4], number => number + 1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(results3, [2, 3, 4, 5]);
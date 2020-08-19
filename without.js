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

const without = function(source, itemsToRemove) {
  let indexToRemove = [];
  let sourceCopy = [...source];

  for (const item of itemsToRemove) {
    source.includes(item) ? indexToRemove.push(source.indexOf(item)) : null;
  }

  for (const index of indexToRemove) {
    sourceCopy.splice(index, 1);
  }

  return sourceCopy;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
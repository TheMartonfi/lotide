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

// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(arr) {

  let output = [];

  for (const element of arr) {

    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        output.push(nestedElement);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 'string', [3, 4, 'timmy'], 7, 'banjo',[9, 'money']]));
assertArraysEqual(flatten([1, 'string', [3, 4, 'timmy'], 7, 'banjo',[9, 'money']]), flatten([1, 'string', [3, 4, 'timmy'], 7, 'banjo',[9, 'money']]));
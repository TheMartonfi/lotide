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

// For arrays with one or two elements, there is no middle. Return an empty array.

// For arrays with odd number of elements, an array containing a single middle element should be returned.

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const middle = function(arr) {
  
  const arrModuloTwo = arr.length % 2;
  const arrLength = arr.length;
  const arrLengthMinus = arrLength - 1;

  if (arrLength < 3) {
    return [];

  } else if (arrModuloTwo !== 0) {
    return arr[Math.floor((arrLengthMinus) / 2)];

  } else if (arrModuloTwo === 0) {
    return [arr[Math.floor(arrLengthMinus / 2)], arr[Math.floor(arrLength / 2)]];
  }
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle([1, 2]), []);
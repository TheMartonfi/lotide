const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {

  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i <= actual.length - 1; i++) {

    const currentActual = actual[i];
    const currentExpected = expected[i];

    if (Array.isArray(currentActual) && Array.isArray(currentExpected)) {
      if (!eqArrays(currentActual, currentExpected)) {
        return false;
      }
    } else if (currentActual !== currentExpected) {
      return false;
    }
  }
  return true;
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
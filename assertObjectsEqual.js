const eqArrays = function(actual, expected) {
  let allValues = '';
  for (let i = 0; i <= actual.length - 1; i++) {
    actual[i] === expected[i] ? allValues += 'true ' : allValues += 'false ';
  }
  return !allValues.includes('false') && actual.length === expected.length ? true : false;
};

const eqObjects = function(objOne, objTwo) {
  
  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);

  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }

  for (const key of objOneKeys) {

    const objOneKey = objOne[key];
    const objTwoKey = objTwo[key];

    if (Array.isArray(objOneKey) && Array.isArray(objTwoKey)) {
      if (!eqArrays(objOneKey, objTwoKey)) {
        return false;
      }
    } else if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`🎉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`⚠️  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

const testObj1 = {
  name: 'Timmy',
  color: 'Green',
  age: 12,
  decks: ['Mono Green Stompy', 'Jank', 'Dumpster Fire']
};
const testObj2 = {
  name: 'Timmy',
  color: 'Green',
  age: 12,
  decks: ['Mono Green Stompy', 'Jank', 'Dumpster Fire']
};

assertObjectsEqual(testObj1, testObj2);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  //Check if value of key is an array
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
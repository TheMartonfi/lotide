const eqArrays = require('./eqArrays');

const eqObjects = function(actual, expected) {
  
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) {
    return false;
  }

  for (const key of actualKeys) {

    const actualKey = actual[key];
    const expectedKey = expected[key];

    if (Array.isArray(actualKey) && Array.isArray(expectedKey)) {
      if (!eqArrays(actualKey, expectedKey)) {
        return false;
      }
    } else if (typeof actualKey === 'object' && typeof expectedKey === 'object') {
      if (!eqObjects(actualKey, expectedKey)) {
        return false;
      }
    } else if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
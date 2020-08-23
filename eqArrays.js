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

module.exports = eqArrays;

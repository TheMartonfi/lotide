const eqArrays = function(actual, expected) {
  let allValues = '';
  for (let i = 0; i <= actual.length - 1; i++) {
    actual[i] === expected[i] ? allValues += 'true ' : allValues += 'false ';
  }
  return !allValues.includes('false') ? true : false;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  eqArrays(arrOne, arrTwo) ? console.log(`🎉 Assertion Passed: ${arrOne} === ${arrTwo}`) : console.log(`⚠️  Assertion Failed: ${arrOne} !== ${arrTwo}`);
};

const letterPositions = function(sentence) {
  let results = {};

  for (let i = 0; i <= sentence.length - 1; i++) {

    const letter = sentence[i].toLowerCase();

    if (results[letter] === undefined) {
      if (letter !== ' ') {
        results[letter] = [i];
      }
    } else {
      results[letter].push(i);
    }
  }
  
  return results;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("This is a sentence").t, [0, 13]);
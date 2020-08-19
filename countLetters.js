const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {

  let letterCount = {};

  const noSpaces = sentence.replace(/ /g, '');

  for (const letter of noSpaces) {
    let lowerCaseLetter = letter.toLowerCase();

    letterCount[lowerCaseLetter] === undefined ? letterCount[lowerCaseLetter] = 1 : letterCount[lowerCaseLetter] += 1;

  }

  return letterCount;
};

console.log(countLetters('This is a sentence'));
console.log(countLetters('word'));
console.log(countLetters("lighthouse in the house"));


const result1 = countLetters("lighthouse in the house");
assertEqual(result1['h'], 4);

const result2 = countLetters('This is a sentence');
assertEqual(result2['s'], 3);
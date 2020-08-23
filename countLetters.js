const countLetters = function(sentence) {

  let letterCount = {};

  const noSpaces = sentence.replace(/ /g, '');

  for (const letter of noSpaces) {
    let lowerCaseLetter = letter.toLowerCase();

    letterCount[lowerCaseLetter] === undefined ? letterCount[lowerCaseLetter] = 1 : letterCount[lowerCaseLetter] += 1;

  }

  return letterCount;
};

module.exports = countLetters;

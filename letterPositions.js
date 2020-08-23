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

module.exports = letterPositions;
const takeUntil = function(array, callback) {
  let results = [];

  for (const elem of array) {
    if (!callback(elem)) {
      results.push(elem);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;
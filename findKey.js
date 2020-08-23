const findKey = (obj, callback) => {
  let results;

  for (const key in obj) {

    if (callback(key)) {
      results = key;
      return key;
    }
  }

  return results;
};

module.exports = findKey;
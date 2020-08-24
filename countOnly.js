const countOnly = function(allItems, itemsToCount) {

  const results = {};

  for (const item of allItems) {

    if (itemsToCount.includes(item)) {
      if (results[item] !== undefined) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
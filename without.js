const without = function(source, itemsToRemove) {
  let indexToRemove = [];
  let sourceCopy = [...source];

  for (const item of itemsToRemove) {
    source.includes(item) ? indexToRemove.push(source.indexOf(item)) : null;
  }

  for (const index of indexToRemove) {
    sourceCopy.splice(index, 1);
  }

  return sourceCopy;
};

module.exports = without;
const findKeyByValue = function(obj, val) {
  let value;

  for (const key in obj) {
    obj[key] === val ? value = key : null;
  }

  return value;
};

module.exports = findKeyByValue;
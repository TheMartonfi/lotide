const flatten = function(arr) {

  let output = [];

  for (const element of arr) {

    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        output.push(nestedElement);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;
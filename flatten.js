const flatten = function(array) {

  let output = [];

  for (const element of array) {

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
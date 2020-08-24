const middle = function(array) {
  
  const isArrayModuloTwo = array.length % 2 === 0;
  const arrayLength = array.length;
  const arrayLastIndex = arrayLength - 1;

  if (arrayLength < 3) {
    return [];

  } else if (!isArrayModuloTwo) {
    return [array[Math.floor((arrayLastIndex) / 2)]];

  } else if (isArrayModuloTwo) {
    return [array[Math.floor(arrayLastIndex / 2)], array[Math.floor(arrayLength / 2)]];
  }
};

module.exports = middle;
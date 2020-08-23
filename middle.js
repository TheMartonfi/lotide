const middle = function(arr) {
  
  const isArrModuleTwo = arr.length % 2 === 0;
  const arrLength = arr.length;
  const arrLengthMinus = arrLength - 1;

  if (arrLength < 3) {
    return [];

  } else if (!isArrModuleTwo) {
    return [arr[Math.floor((arrLengthMinus) / 2)]];

  } else if (isArrModuleTwo) {
    return [arr[Math.floor(arrLengthMinus / 2)], arr[Math.floor(arrLength / 2)]];
  }
};

module.exports = middle;
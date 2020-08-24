const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 8, 4, 5]), false);
assertEqual(eqArrays([1, [1, 2, [3, 4]], 3, 4, 5], [1, [1, 2, [3, 4]], 3, 4, 5]), true);
assertEqual(eqArrays([1, [1, 2, [3, 5]], 3, 4, 5], [1, [1, 2, [3, 4]], 3, 4, 5]), false);
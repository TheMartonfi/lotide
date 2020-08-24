const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1, 2, 3, 4, 5]), 1);
assertEqual(head(['word', 2, 3, 4, 5]), 'word');
assertEqual(head([true, 2, 3, 4, 5]), true);
assertEqual(head([]), undefined);

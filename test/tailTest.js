const assertEqual = require('../assertEqual');
const tail = require('../tail');

// assertEqual(tail([1, 2, 3, 4, 5]), 5);
// assertEqual(tail([1, 2, 3, 4, 8]), 8);
// assertEqual(tail([1, 2, 3, 4, 'word']), 'word');
// assertEqual(tail([1, 2, 3, 4, 'word']), 1);
// assertEqual(tail([1, 2, 3, 4, 'word']), 'string');
// assertEqual(tail([]), undefined);
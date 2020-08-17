const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual('word', 'word');
assertEqual('word', 'not word');
assertEqual(12, 12);
assertEqual(12, 21);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  let results;

  for (const key in obj) {

    //console.log(key['stars']);

    if (callback(key)) {
      results = key;
      return key
    } 
  }

  return results;
};


const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);


const results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x === 'Ora');

const results3 = findKey({
  bob: { age: 34 },
  valerie: { age: 42 },
  timmy: { age: 12}
}, name => name === 'timmy');


// The callback in results1 tries to access the stars property of the keys but when I log the properties to the console it always shows undefined
assertEqual(results1, 'noma');
assertEqual(results2, 'Ora');
assertEqual(results3, 'timmy');



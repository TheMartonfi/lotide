# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @TheMartonfi/lotide`

**Require it:**

`const _ = require('@TheMartonfi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: When given a string it returns an object that has key value pairs of letter: count does not include spaces
* `countOnly`: Given an array and an array of elements to count it will return an object with key value pairs of itemToCount: count
* `eqArrays`: Compares two arrays and returns true if both arrays are identical otherwise returns false (does support nested arrays) 
* `eqObjects`: Compares two objects and returns true if both objects are identical otherwise returns false (does support nested arrays) 
* `findKey`: Takes an object and callback if the callback called on the key is true it will return the first key that matches the callback condition otherwise it returns undefined
* `findKeyByValue`: Takes an object and value and finds the key matching the value and returns it if there is no key matching that name it returns undefined
* `flatten`: Takes an array of nested arrays and returns the array without nesting, if no nesting is present it returns the original array
* `head`: Takes the first element of an array and returns it if there is no element in the array it returns undefined
* `letterPositions`: Given a string it will return an object with key value pairs of letter: [index1, index2...]
* `map`: Takes an array and callback and applies the callback to every element in the array and returns a new array with the modified elements
* `middle`: Given an array it returns the middle index of the array [middleIndex] if the array is even it will return both middle numbers [middleIndex1, middleIndex2]
* `tail`: Given an array it returns the last element of the arrayGiven an array it returns the middle index of the array [middleIndex] if the array is even it will return both middle numbers [middleIndex1, middleIndex2]
* `takeUntil`: Takes an array and callback and will add items to a new array until the callback condition evaluates to true when it does it returns the new array
* `without`: Takes an array and an array of items to remove and returns a new array with the elements removed




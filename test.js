'use strict';

const assert = require('assert');
const reverseArr = require('.');

let arrA = ["A", "B", "C"];
let arrB = [1, 2, 3, 4, 5];

describe('reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order', () => {
  it('reverse ["A", "B", "C"]', () => {
    assert.deepEqual(reverseArr.reverseArray(arrA), ['C', 'B', 'A']);
  });

  it('reverse [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(reverseArr.reverseArray(arrB), [5, 4, 3, 2, 1]);
  });
});

describe('reverseArrayInPlace: it modifies the array given as argument by reversing its elements', () => {
  it('reverse ["A", "B", "C"]', () => {
    assert.deepEqual(reverseArr.reverseArrayInPlace(arrA), ['C', 'B', 'A']);
  });

  it('reverse [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(reverseArr.reverseArrayInPlace(arrB), [5, 4, 3, 2, 1]);
  });
});

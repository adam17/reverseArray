'use strict';

const assert = require('assert');
const reverseArr = require('.');

let arrA = ["A", "B", "C"];
let arrB = [1, 2, 3, 4, 5];
let arrC = [11, 11, 22, 44, 66, 77];

describe('reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order', () => {
  it('empty response when empty parameter', () => {
    assert.deepEqual(reverseArr.reverseArray(), []);
    assert.deepEqual(reverseArr.reverseArray(null), []);
    assert.deepEqual(reverseArr.reverseArray(undefined), []);
    assert.deepEqual(reverseArr.reverseArray(''), []);
  });
  it('reverse ["A", "B", "C"]', () => {
    assert.deepEqual(reverseArr.reverseArray(arrA), ['C', 'B', 'A']);
  });
  it('reverse [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(reverseArr.reverseArray(arrB), [5, 4, 3, 2, 1]);
  });
});

describe('reverseArrayInPlace: it modifies the array given as argument by reversing its elements', () => {
  it('empty response when empty parameter', () => {
    assert.deepEqual(reverseArr.reverseArrayInPlace(), []);
    assert.deepEqual(reverseArr.reverseArrayInPlace(null), []);
    assert.deepEqual(reverseArr.reverseArrayInPlace(undefined), []);
    assert.deepEqual(reverseArr.reverseArrayInPlace(''), []);
  });
  it('reverse ["A", "B", "C"]', () => {
    assert.deepEqual(reverseArr.reverseArrayInPlace(arrA), ['C', 'B', 'A']);
  });
  it('reverse [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(reverseArr.reverseArrayInPlace(arrB), [5, 4, 3, 2, 1]);
  });
  it('reverse [11, 11, 22, 44, 66, 77]', () => {
    assert.deepEqual(reverseArr.reverseArrayInPlace(arrC), [77, 66, 44, 22, 11, 11]);
  });
});

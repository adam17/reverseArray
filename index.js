'use strict';

module.exports = {
  reverseArray: function(arr) {
    if (!arr || !Array.isArray(arr))
      return [];

    let retArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      retArr.push(arr[i]);
    }
    return retArr;
  },

  reverseArrayInPlace: function(arr) {
    if (!arr || !Array.isArray(arr))
      return [];

    let temp;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
};

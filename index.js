"use strict";

var a = 10;
console.log(a);

var _ = require('lodash'); // Lodash chunking array


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var c1 = _.chunk(nums, 2);

console.log(c1);
console.log("===================================================================================");
var numberArray = [7, 9, 3, 6, 1];

_.first(numberArray, 4);

console.log("===================================================================================");
var firstArray = [1, 5, 6, 7, 2];
var secondArray = [6, 7, 1];
console.log(_.differenceWith(firstArray, secondArray, _.isEqual));
console.log("===================================================================================");
var array = [1, 2, 3];

_.fill(array, 'a');

console.log(array);

_.fill(Array(3), 2);

console.log(_.fill(Array(3), 2));
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
console.log("===================================================================================");
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
console.log("===================================================================================");
console.log(_.fromPairs([['a', 1], ['b', 2]]));


42 lines (36 sloc)  1.41 KB
'use strict';

function sum (x,y) {
  return [x + y, 'The sum of 4 and 7 is 11.'];
}

function testSum() { //eslint-disable-line
if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
console.log('%c TEST FOR sum() PASSES', 'color: green');
} else {
console.log('%c TEST FOR sum() FAILS', 'color: red');
}
}
testSum();

function multiply(x , y) {
  return [x * y, 'The product of 5 and 9 is 45.'];
}

function testMultiply() { //eslint-disable-line
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}
testMultiply();

function sumAndMultiply (x , y , z) {
  return [x + y + z, x * y * z, '4 and 7 and 5 sum to 16.', 'The product of 4 and 7 and 5 is 140.'];
}

function testSumAndMultiply() { //eslint-disable-line
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}
testSumAndMultiply();

var testArray = [2 , 3, 4];

function sumArray(testArray) {
  return [sum, '2,3,4 was passed in as an array of numbers, and 9 is their sum.'];
}

function testSumArray() { //eslint-disable-line
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}
testSumArray();

function multiplyArray(testArray) {
  return [testArray, 'The numbers 2,3,4 have a product of 24.'];
}

function testMultiplyArray() { //eslint-disable-line
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
testMultiplyArray();

const arrNumbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

//a. Sort numbers from lowest to highest
const sortedAsc =arrNumbers.slice().sort(function(a, b) {
  return a - b;
});
console.log('Lowest to highest:', sortedAsc);

//b. Sort numbers from highest to lowest
const sortedDesc = arrNumbers.slice().sort(function(a, b) {
  return b - a;
});
console.log('Highest to lowest:', sortedDesc);

// c. Return an array of unique numbers. If a number is repeated, it should not occur twice in the returned array.

const uniqueSet = new Set(arrNumbers); 
const uniqueNums = Array.from(uniqueSet); 

console.log("Unique numbers are:", uniqueNums)

// d.Calculate the sum of the numbers in the array referred to in the problem statement
const sum = arrNumbers.reduce(function(c, d) {
  return c + d;
}, 0);
console.log('Sum is:', sum);

//e. Return a new array with elements that are less than or equal to 100
const numbersLessThanOrEqualTo100 = arrNumbers.filter(function(num) {
  return num <= 100;
});
console.log("Numbers <= 100:", numbersLessThanOrEqualTo100);

// Return a new array with elements that are greater than 50
const numbersGreaterThan50 = arrNumbers.filter(function(num) {
  return num > 50;
});
console.log("Numbers > 50:", numbersGreaterThan50);

// Return a new array with elements that are divisible by 2
const numbersDivisibleBy2 = arrNumbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("Numbers divisible by 2:", numbersDivisibleBy2);

// Return a new array with elements that are divisible by 3
const numbersDivisibleBy3 = arrNumbers.filter(function(num) {
  return num % 3 === 0;
});
console.log("Numbers divisible by 3:", numbersDivisibleBy3);

//i. Return a new array with elements that are neither divisible by 2 or 3, if they exist. Otherwise return an empty array.
const numbersNotDivisibleBy2Or3 = arrNumbers.filter(function(num) {
  return num % 2 !== 0 && num % 3 !== 0;
});
console.log("Numbers neither divisible by 2 nor 3:", numbersNotDivisibleBy2Or3);

// j. Declare a variable that counts how many elements are in the original array
const countOfElements = arrNumbers.length;
console.log("Count of elements:", countOfElements);

// k. Declare a new array that contains the same elements as the original array, but reversed. The array should start at 980 and end at 3.
const copyArray = arrNumbers.slice().reverse();
console.log("Copy of original array:", copyArray);


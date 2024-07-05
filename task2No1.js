const arrNumbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// a. Sort numbers from lowest to highest
function sortAscending(numbers) {
  return numbers.slice().sort(function(a, b) {
    return a - b;
  });
}
console.log('Lowest to highest:', sortAscending(arrNumbers));

// b. Sort numbers from highest to lowest
function sortDescending(numbers) {
  return numbers.slice().sort(function(a, b) {
    return b - a;
  });
}
console.log('Highest to lowest:', sortDescending(arrNumbers));

// c. Return an array of unique numbers. If a number is repeated, it should not occur twice in the returned array.
function getUniqueNumbers(numbers) {
  const uniqueSet = new Set(numbers);
  return Array.from(uniqueSet);
}
console.log("Unique numbers are:", getUniqueNumbers(arrNumbers));

// d. Calculate the sum of the numbers in the array referred to in the problem statement
function calculateSum(numbers) {
  return numbers.reduce(function(c, d) {
    return c + d;
  }, 0);
}
console.log('Sum is:', calculateSum(arrNumbers));

// e. Return a new array with elements that are less than or equal to 100
function getNumbersLessThanOrEqualTo100(numbers) {
  return numbers.filter(function(num) {
    return num <= 100;
  });
}
console.log("Numbers <= 100:", getNumbersLessThanOrEqualTo100(arrNumbers));

// f. Return a new array with elements that are greater than 50
function getNumbersGreaterThan50(numbers) {
  return numbers.filter(function(num) {
    return num > 50;
  });
}
console.log("Numbers > 50:", getNumbersGreaterThan50(arrNumbers));

// g. Return a new array with elements that are divisible by 2
function getNumbersDivisibleBy2(numbers) {
  return numbers.filter(function(num) {
    return num % 2 === 0;
  });
}
console.log("Numbers divisible by 2:", getNumbersDivisibleBy2(arrNumbers));

// h. Return a new array with elements that are divisible by 3
function getNumbersDivisibleBy3(numbers) {
  return numbers.filter(function(num) {
    return num % 3 === 0;
  });
}
console.log("Numbers divisible by 3:", getNumbersDivisibleBy3(arrNumbers));

// i. Return a new array with elements that are neither divisible by 2 nor 3, if they exist. Otherwise, return an empty array.
function getNumbersNotDivisibleBy2Or3(numbers) {
  return numbers.filter(function(num) {
    return num % 2 !== 0 && num % 3 !== 0;
  });
}
console.log("Numbers neither divisible by 2 nor 3:", getNumbersNotDivisibleBy2Or3(arrNumbers));

// j. Declare a variable that counts how many elements are in the original array
function countElements(numbers) {
  return numbers.length;
}
console.log("Count of elements:", countElements(arrNumbers));

// k. Declare a new array that contains the same elements as the original array, but reversed. The array should start at 980 and end at 3.
function getReversedArray(numbers) {
  return numbers.slice().reverse();
}
console.log("Copy of original array:", getReversedArray(arrNumbers));

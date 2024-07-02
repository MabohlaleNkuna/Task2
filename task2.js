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
console.log('Sum of the numbers:', sum);

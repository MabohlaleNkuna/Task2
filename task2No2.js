//add functions to the code with same functionality
const arr = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

// a. Using a for loop and a variable, return all values that are numbers
function getNumbers(array) {
  const numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      numbers.push(array[i]);
    }
  }
  return numbers;
}
console.log('Numbers:', getNumbers(arr));

// b. Using a while loop and a variable, return all values that are strings
function getStrings(array) {
  const strings = [];
  let index = 0;
  while (index < array.length) {
    if (typeof array[index] === 'string') {
      strings.push(array[index]);
    }
    index++;
  }
  return strings;
}
console.log('Strings:', getStrings(arr));

// c. Using a do while loop, return the sum of all values in the array
function getSumOfNumbers(array) {
  let sum = 0;
  let j = 0;
  do {
    if (typeof array[j] === 'number') {
      sum += array[j];
    }
    j++;
  } while (j < array.length);
  return sum;
}
console.log('Sum of numbers:', getSumOfNumbers(arr));

// d. Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting
function getGreeting(array) {
  const greetingSt = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      greetingSt.push(array[i]);
    }
  }
  let greeting = "Hello, ";
  for (let i = 0; i < greetingSt.length; i++) {
    if (i === greetingSt.length - 1 && i !== 0) {
      greeting += "and " + greetingSt[i] + ".";
    } else if (i === greetingSt.length - 2) {
      greeting += greetingSt[i] + " ";
    } else {
      greeting += greetingSt[i] + ", ";
    }
  }
  return greeting;
}
console.log(getGreeting(arr));

// e. Using any looping structure of your choice and a new variable, remove all values in the array that are strings
function removeStrings(array) {
  const notStrings = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      notStrings.push(array[i]);
    }
  }
  return notStrings;
}
console.log('Array with no strings:', removeStrings(arr));


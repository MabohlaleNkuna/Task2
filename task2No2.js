
const arr = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

// a. Using a for loop and a variable, return all values that are numbers
const numbers = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    numbers.push(arr[i]);
  }
}
console.log('Numbers:', numbers);

// b. Using a while loop and a variable, return all values that are strings
const strings = [];
let index = 0;
while (index < arr.length) {
  if (typeof arr[index] === 'string') {
    strings.push(arr[index]);
  }
  index++;
}
console.log('Strings:', strings);

// c. Using a do while loop, return the sum of all values in the array
let sum = 0;
let j = 0;
do {
  if (typeof arr[j] === 'number') {
    sum += arr[j];
  }
  j++;
} while (j < arr.length);
console.log('Sum of numbers:', sum);

// d. Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting
const greetingSt = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    greetingSt.push(arr[i]);
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
console.log(greeting);

//e. Using any looping structure of your choice and a new variable, remove all values in the array that are strings
const notStrings = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'string') {
    notStrings.push(arr[i]);
  }
}
console.log('Array with no strings:', notStrings);

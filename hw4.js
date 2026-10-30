// Section 1: Basic Rules and Data Types

// Exercise 1: Formatting and Naming (Code Correction)
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  // code block
}

// Exercise 2: Defining Core Data Types (Coding)
let myString = `Template string example`;
let myFloat = 99.99;
let myBoolean = true;

// Exercise 3: Single-Line Comments (Coding)
// This variable tracks the user's current score in the application
let currentScore = 95;

// Exercise 4: Equality Comparison (Coding)
console.log('100' == 100);  // Value equality (true)
console.log('100' === 100); // Strict equality (false)


// Section 2: Conditionals and Control Flow

// Exercise 5: Ternary Operator (Coding)
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";

// Exercise 6: If/Else Structure (Coding)
let userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Exercise 7: Logical AND Operator (Coding)
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}

// Exercise 8: For Loop (Coding)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 9: Loop Control (Coding)
for (let i = 0; i <= 9; i++) {
  if (i === 7) {
    break;
  }
}

// Exercise 10: Ensuring Execution (Coding)
let counter = 10;
do {
  console.log("Running once");
} while (false);


// Section 3: Functions and Data Structures

// Exercise 11: Function Definition (Coding)
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);

// Exercise 12: Array Manipulation (Coding)
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));

// Exercise 13: Array Copying (Coding)
let originalData = [1, 2, 3];
let clonedData = originalData.slice();

// Exercise 14: Object Constructor (Coding)
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation (Coding)
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];

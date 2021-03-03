// task: replace a word ('important' => 'urgent')
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important','urgent'));

// task: write two distinct ways of reversing the array without mutating the original array. 
// Use reverse for the first solution, and sort for the second.

let array = [10, 2, 39, 4, 50, 6, 7, 18, 9 , 1]; //an un-ordered array

//let arrayRev = array.slice().reverse();
//console.log(arrayRev +' reversed');

let arraySorted = [array].sort((num1, num2) => num1 - num2);
console.log(arraySorted +' sorted');
console.log(array + ' original');

//Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; 
let number2 = 95;

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
let fourScoreAnd = "Four score and ";
console.log(fourScoreAnd + famousWords);
console.log(fourScoreAnd.concat(famousWords));

// create an array
let flintstonesArr = ["Fred", "Wilma"];
flintstonesArr.push(...["Barney", "Betty"],...["Bambam", "Pebbles"]);
console.log(flintstonesArr);

// create an array from this object that contains only two elements: Barney's name and Barney's number:
let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstonesObj)[2];
console.log(barney);

// is array ?
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

//
const tableLength = 40;
let title = "Flintstone Family Members";
console.log(title.padStart((tableLength-title.length)/2, ' '));

/* Write two one-line expressions to count the number of lower-case t characters in each of the following strings: */
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log((statement1.split('t').length-1)); // 2
console.log((statement2.split('t').length-1)); // 0





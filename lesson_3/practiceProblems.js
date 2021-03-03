
// #1 Will the code raise error?
let numbers = [1, 2, 3];
numbers[6] = 5;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* output after running the code:
1
2
3
undefined
undefined
undefined
5
Answer: Code will not raise an error.
*/

// #2
numbers[4];  // what will this line return?
// the line returns 'undefined'

//
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot'); //false

ages["Marylin"] = 22;
ages["Spot"] = 237;
console.log(ages);
ages.hasOwnProperty('Spot'); //true

let additionalAges = { Maril: 22, Spottt: 237 };
let newAges = Object.assign(ages,additionalAges);
console.log(newAges);

//
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
newStr = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(newStr);

//
console.log(false == '0'); // true
console.log(false === '0'); // false

// Determine whether the name Dino appears in the strings below -- check each string separately):
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log('Is Dino in a string?');
let f = str1.includes('Dino',0); //false
let f2 = str2.includes('Dino',0); //true
// v2..when checking each word separetaly
str1.split(' ').forEach(word => console.log(word.includes('Dino'))); 
str2.split(' ').forEach(word => console.log(word.includes('Dino'))); 

// add Dino
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.push('Deno','Reno','Keno');

//
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.slice(0,advice.indexOf('house')));
// Expected return value:
// => 'Few things in life are as important as '




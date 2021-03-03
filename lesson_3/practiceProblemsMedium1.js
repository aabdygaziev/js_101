// #1
for (let i = 0; i <= 10; i++) {
  console.log(' '.repeat(i) + "The Flintsones Rock!");
}

// #2
let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase()
  } else {
    return char.toUpperCase();
  }
}).join(''));

// #3
function factorFinder(number) {
  let factors = [];
  let divisor = number;
  if (number <= 0) {
    console.log('Please use positive number and number that is not zero');
  } 
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor); // if to leave only 'devisor' array's order will be descending
    }
    divisor -= 1;
  }
  return factors;
}

abc = factorFinder(9);
console.log(abc);

// #4
// difference is push mutates the original array whereas concat returns new array;

// #5

// 8 
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);

//

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//
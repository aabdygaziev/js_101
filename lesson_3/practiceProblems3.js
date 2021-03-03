// 3 ways of removing elements from array
let numbers = [1, 2, 3, 4]; // first way of doing it

while (numbers.length > 0) {
    numbers.pop();
}

console.log(numbers);

let numbers1 = [1, 2, 3, 4];

numbers1.splice(0,numbers1.length); // second way
console.log(numbers1);

let numbers2 = [1, 2, 3, 4];

let new_arr  = numbers2.filter(function(value, index, arr) { // third way
    return value > 5;
})
console.log(new_arr);

//rewrite the function below
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}


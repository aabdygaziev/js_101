// ## SORTING PROBLEMS

// How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a,b) => a.lengths - b.lengths);


// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

console.log(arr.sort((a,b) => Number(a) - Number(b)));

// sort by published year
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => {
  return Number(a.published - b.published);
}));

// how to access g?

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr1 = arr1.flat().flat()
console.log(arr1.slice(-1)[0]);


let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

arr2.map(elem => Object.values(elem)).flat().flat().forEach(char => {
  if (char ==='g') {
    console.log(char);
  }
});

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
console.log(Object.keys(obj2['third'])[0]);


// change the value of 3 to 4;

let arr11 = [1, [2, 3], 4];

let arr22 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj13 = { first: [1, 2, [3]] };

let obj22 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr11[1][1] = 5;
arr22[2] = 5;
obj13['first'][2][0] = 5;
obj22['a']['a'][2] = 5;


// compute total age of male members
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ages = 0;
for (let element in munsters) {
  if (munsters[element]['gender'] === 'male') {
    ages += munsters[element]['age'];
  }
}
console.log(ages);

// print on console (Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach(elem => {
  let name = elem[0];
  let age = elem[1]['age'];
  let gender = elem[1]['gender'];

  console.log(`${name} is a ${age} years old ${gender}`);
})

// print all vowels
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';
let printVowels = [];

Object.values(obj).flat().forEach(item => {
  item.split('').forEach(letter => {
    if (vowels.includes(letter)) {
      console.log(letter);
    }
  });
});

// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.
let list = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(list.map(item => {
  if (typeof item[0] === 'string') {
    return item.slice().sort();
  } else {
    return item.slice().sort((a, b) => a - b);
  }
}));

// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.
let list2 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newList2 = list2.map(obj => {
  let nObj = {};
  
  for (key in obj) {
    nObj[key] = obj[key] + 1;
  }
  return nObj;
});

console.log(newList2);


// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
let list3 = [[2], [3, 5, 7], [9], [11, 15, 18]];


console.log(list3.map(item => {
  return item.filter(x => {
    if (x % 3 === 0) {
      return x;
    }
  });
}));

// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let list4 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

list4.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});


//Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj_1 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let newObj_1 = Object.values(obj_1).map(item => {
  if (item.type === 'fruit') {
    return item.colors.map(x => {
      return x[0].toUpperCase() + x.slice(1);
    });
  } else {
    return item.size.toUpperCase();
  }
});

console.log(newObj_1);

//Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr_1 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr_1 = arr_1.filter(element => {
  return Object.values(element).every(item => {
    return item.every(x => x % 2 === 0);
  });
});

console.log(newArr_1);


//Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

let arr_2 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }












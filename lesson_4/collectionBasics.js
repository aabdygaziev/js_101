let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(basket) {
  let basketKeys = Object.keys(basket);
  let fruits = {};

  for (let i = 0; i < basketKeys.length; i++ ) {
    let currentKey = basketKeys[i];
    let currentVal = basket[currentKey];

    if (currentVal === 'Fruit') {
      fruits[currentKey] = currentVal;
    }
  }
  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }


//

let arr = [1, 2, 3, 4, 5, 6];


function Double(arr) {  // this function mutates the argument
  for (let i = 0; i < arr.length; i++) {
      arr[i] *= 2;
  }
  return arr;
}
console.log(Double(arr));

function doubleOddIndices(arr) { // this function mutates the argument
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 !== 0) {
      arr[i] *= 2;
    }
  }
  return arr;
}
let arr2 = [2, 3, 4, 5, 6, 6, 7, 8, 9, 11];
console.log(doubleOddIndices(arr2));





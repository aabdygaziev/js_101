function joinOr(array, delimiter=';', connector = ' or ') {
  let len = array.length;
  if (len < 2) {
    return array.join();
  } else if (len > 2) {
    return array.slice(0,len - 1).join(delimiter) + connector + array.slice(-1);
  } else {
    return array.slice(0,1) + connector + array.slice(-1);
  }
}
//
const humanMarker = 'X';
const computerMarker = 'O';

function whoGoesFirstRandomizer() {
  let random = Math.floor(Math.random() * 2);
  console.log(random);
  if (random === 1) {
    return humanMarker;
  } else {
    return computerMarker;
  }
}

let player = whoGoesFirstRandomizer();
console.log(player);

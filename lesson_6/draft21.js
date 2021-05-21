function reverseN(n) {
  let newArr = String(n).split('');
  let newArr2 = [];
  for (let i = 1, len = newArr.length; i <= len; i++) {
    newArr2.push(newArr[len - i]);
  }
  return newArr2;
}

console.log(reverseN(12345));

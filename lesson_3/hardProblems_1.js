function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return 'invalid input'
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

ipAdress = '10.4.5.11';
ipAdress2 = '10.4.5';

console.log(isDotSeparatedIpAddress(ipAdress));
console.log(isDotSeparatedIpAddress(ipAdress2));
// calculator
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(message, lang='en') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);



while (true) {
  prompt('Enter the first number');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("Enter the second number");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  let operator = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
  let index = readline.keyInSelect(operator, '==> What operation would you like to perform?\n');

  let output;
  switch (operator[index]) {
    case 'Addition':
      output = Number(number1) + Number(number2);
      break;
    case 'Subtraction':
      output = Number(number1) - Number(number2);
      break;
    case 'Multiplication':
      output = Number(number1) * Number(number2);
      break;
    case "Division":
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The output is ${output}.`);

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}




function notZeroApr(loanAmount, interestRate, loanDuration) {
  loanDuration = Number(loanDuration);
  loanAmount = Number(loanAmount);
  interestRate = Number(interestRate);

  loanDuration *= 12;
  let monthlyRate = interestRate / 100 / 12;
  let monthlyPmt = (monthlyRate * loanAmount) / (1 - Math.pow((1 + monthlyRate),
    (-loanDuration)));

  return monthlyPmt.toFixed(2);
}

function zeroApr(loanAmount, loanDuration) {
  loanDuration = Number(loanDuration);
  loanAmount = Number(loanAmount);

  loanDuration *= 12;
  let monthlyPmt = loanAmount / loanDuration;

  return monthlyPmt.toFixed(2);
}

function invalidInput(input) {
  return input.trim() === '' ||
         Number(input) < 0   ||
         Number.isNaN(Number(input));
}

let prompt = (message) => console.log('==> ' + message);

const readline = require('readline-sync');

prompt('Welcome to the Loan Calculator!');

while (true) {
  prompt('_________________________________________________');

  prompt('Please enter the Loan Loan Amount');
  let loanAmount = readline.question();
  if (loanAmount <= 0) {
    prompt("Loan amount should not be Zero...Enter again...");
    loanAmount = readline.question();
  }

  while (invalidInput(loanAmount)) {
    prompt('Invalid input...Try again');
    loanAmount = readline.question();
  }

  prompt('Please enter the interest rate');
  let APR = readline.question();

  while (invalidInput(APR)) {
    prompt('Invalid input...Try again');
    APR = readline.question();
  }

  prompt('Please enter the loan duration(in years)?');
  let loanDuration = readline.question();
  if (loanDuration <= 0) {
    prompt("Loan duration can not be Zero...Enter again...");
    loanDuration = readline.question();
  }

  while (invalidInput(loanDuration)) {
    prompt('Invalid input...Try again');
    loanDuration = readline.question();
  }

  if (APR === 0) {
    let yourMonthlyPmt = zeroApr(loanAmount, loanDuration);
    console.log(`Your monthly payment is $${yourMonthlyPmt}`);
  } else {
    let yourMonthlyPmt = notZeroApr(loanAmount, APR,loanDuration);
    console.log(`Your monthly payment is $${yourMonthlyPmt}`);
  }

  prompt("Hit y for another calculation. Hit any key to exit.");
  let anotherEntry = readline.question();
  console.clear();
  if (anotherEntry.toLowerCase() !== 'y') {
    break;
  }

}



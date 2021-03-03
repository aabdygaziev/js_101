//rock paper scissors gamge

const readline = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors','spock','lizard'];

let prompt = (message) => console.log(`${message}`);

function yourWinCombos(user, computer) {
  return (user === 'rock' && computer === 'scissors') ||
    (user === 'rock' && computer === 'lizard') ||
    (user === 'paper' && computer === 'spock') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'scissors' && computer === 'lizard') ||
    (user === 'spock' && computer === 'scissors') ||
    (user === 'spock' && computer === 'rock') ||
    (user === 'lizard' && computer === 'spock') ||
    (user === 'lizard' && computer === 'paper');
}

function whoWins (user, computer) {
  if (yourWinCombos(user, computer)) {
    return user;
  } else if (user === computer) {
    return ('It is a tie');
  } else {
    return computer;
  }
}

const totalRounds = 5;

while (true) {
  let yourPoints = 0;
  let computerPoints = 0;
  prompt('===>>> Welcome! <<<===');

  for (let rounds = 0; rounds < totalRounds; rounds++) {
    let yourIndex = readline.keyInSelect(VALID_CHOICES, 'Your choice?');
    let yourChoice = VALID_CHOICES[yourIndex];
    if (yourChoice === undefined) {
      break;
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];
    prompt(`You chose ${yourChoice}. Computer chose ${computerChoice}.`);
    let winningMove = whoWins(yourChoice, computerChoice);
    if (winningMove === yourChoice) {
      yourPoints++;
      prompt('You win this round');
    } else if (winningMove === computerChoice) {
      computerPoints++;
      prompt('Computer wins this round');
    }
  }

  prompt(`Final stats after 5 rounds:\n
    You have ${yourPoints} points\n.
    Computer has ${computerPoints} points.`);
  if (yourPoints > computerPoints) {
    prompt('The winner is you!');
  } else if (yourPoints === computerPoints) {
    prompt ('It is a tie...');
  } else {
    prompt('The winner is computer!');
  }

  prompt('Hit "y" to play again. Hit any key to exit. ');
  let userAnswer = readline.question().toLowerCase();
  console.clear();
  if (userAnswer[0] !== 'y') {
    break;
  }
}

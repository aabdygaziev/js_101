const rank = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suit = ['C','D','H','S']; // clubs, diamonds, hearts, spades

const dealerLimit = 17; // if dealer has less than 17 points draw a card

const readline = require('readline-sync');

let prompt = (message) => console.log(`${message}`);

function deckInit(rank, suit) {
  let cards = [];
  for (let suitCount = 0; suitCount < 4; suitCount++) {
    for (let rankCount = 0; rankCount < 13; rankCount++) {
      cards.push(rank[rankCount] + suit[suitCount]);
    }
  }
  return cards;
}

function shuffle (deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

function getScore(hand) {
  let sum = 0;
  hand.forEach(card => {
    let cardLen = card.length;
    if (card.includes('A')) {
      sum += 11;
      if (sum > 21) {
        sum -= 10;
      }
    } else if (
      card.includes('J') || card.includes('Q') || card.includes('K')) {
      sum += 10;
    } else {
      sum += Number(card.slice(0, cardLen - 1));
    }
  });
  return sum;
}

function busted(score) {
  return score > 21;
}

function getResults(playerTotal, dealerTotal) {
  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(result) {
  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function dealCards(deck, hand) {
  hand.push(deck.shift());
}

function firstDeal(deck) {
  let playerHand = [];
  let dealerHand = [];
  dealCards(deck, playerHand);
  dealCards(deck, dealerHand);
  dealCards(deck, playerHand);
  dealCards(deck, dealerHand);
  return [playerHand, dealerHand];
}

function playAgain() {
  prompt('-------------------------\nWould you like to play again?');
  let ask = readline.question().toLowerCase();
  while (ask !== 'y' && ask !== 'n') {
    prompt('Please enter "y" or "n".');
    ask = readline.question().toLowerCase();
  }
  return ask === 'y';
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function roundsToPlay() {
  prompt('Please enter a number of rounds youw would like to play, between 1 - 9:');
  let round = readline.question();

  while (invalidNumber(round)) {
    prompt('Invalid input...');
    prompt('Enter a number between 1 - 9');
    round  = readline.question();
  }
  return round;
}

function hitOrStay() {
  prompt('Would you like to (h)it or (s)tay?');
  let answer = readline.question();
  while (true) {
    if (['h', 's'].includes(answer)) break;
    prompt('Please enter "h" or "s"');
  }
  return answer;
}

function playerTurn(deck, playerHand, playerScore, dealerScore) {
  while (true) {
    let answer = hitOrStay();

    if (answer === 'h') {
      dealCards(deck, playerHand);
      playerScore = getScore(playerHand);
      prompt('You chose hit.');
      prompt(`Your hand: ${playerHand}`);
      prompt(`Your score: ${playerScore}`);
    }
    if (answer === 's' || busted(playerScore)) break;
  }
  if (busted(playerScore)) {
    prompt(`You have: ${playerScore} points.`);
    let result = getResults(playerScore, dealerScore);
    displayResults(result);
  } else {
    prompt(`You stayed at ${playerScore} points.`);
  }
}

function dealerTurn(deck, dealerHand, dealerScore, playerScore) {
  if (dealerScore < dealerLimit) {
    prompt('Dealer hits');
    dealCards(deck, dealerHand);
    dealerScore = getScore(dealerHand);
    prompt(`Dealer"s hand: ${dealerHand}`);
    prompt(`Dealer"s score: ${dealerScore}`);
  } else if (busted(dealerScore)) {
    prompt(`Dealer has: ${dealerScore} points.`);
    let result = getResults(playerScore, dealerScore);
    displayResults(result);
    prompt('Dealer stays.');
  }
}

// -------- main game loop ------------ //

while (true) {
  console.clear();
  prompt('Welcome to Twenty-One!\n');

  let rounds = roundsToPlay();
  prompt(`${rounds} rounds is goint to be played.`);
  prompt(`Player who wins the most rounds wins the game.\n`);

  let playerWins = 0;
  let dealerWins = 0;

  for (let roundCounter = 1; roundCounter <= rounds; roundCounter++) {
    prompt(`----------- Round #: ${roundCounter} -----------\n`);
    let deck = deckInit(rank, suit);
    shuffle(deck);
    let [playerHand, dealerHand] = firstDeal(deck);
    let playerScore = getScore(playerHand);
    let dealerScore = getScore(dealerHand);

    prompt(`Dealer has ${dealerHand[0]} and unknown card.\n`);
    prompt(`You have: ${playerHand} and ${playerScore} points.`);

    playerTurn(deck, playerHand, playerScore, dealerScore);
    playerScore = getScore(playerHand);
    dealerTurn(deck, dealerHand, dealerScore, playerScore);
    dealerScore = getScore(dealerHand);

    let result = getResults(playerScore, dealerScore);
    if (result === 'PLAYER' || result === 'DEALER_BUSTED') {
      playerWins++;
    } else if (result === 'DEALER' || result === 'PLAYER_BUSTED') {
      dealerWins++;
    }

    console.log('\n======= Game Stats ========\n');
    prompt(`Player has:${playerHand}, and ${playerScore} points.`);
    prompt(`Dealer has:${dealerHand}, and ${dealerScore} points.`);
    prompt(`Player has won ${playerWins} rounds.`);
    prompt(`Dealer has won ${dealerWins} rounds.`);
  }
  if (playerWins > dealerWins) {
    prompt('\nYou won the game!');
  } else if (playerWins < dealerWins) {
    prompt('\nDealer won the game!');
  } else {
    prompt('\nTIE!');
  }

  if (!playAgain()) break;
  console.clear();
}

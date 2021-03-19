// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

const rank = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suit = ['C','D','H','S']; // clubs, diamonds, hearts, spades

const dealerLimit = 17; // if dealer has less than 17 points draw a card

const readline = require('readline-sync');

//helper function
let prompt = (message) => console.log(`${message}`);

// Initialize deck
function deckInit(rank, suit) {
  let cards = [];
  for (let suitCount = 0; suitCount < 4; suitCount++) {
    for (let rankCount = 0; rankCount < 13; rankCount++) {
      cards.push(rank[rankCount] + suit[suitCount]);
    }
  }
  return cards;
}

//shuffle cards
function shuffle (deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

// point count
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

//game point check
function busted(hand) {
  return getScore(hand) > 21;
}

function getResults(playerHand, dealerHand) {
  let playerTotal = getScore(playerHand);
  let dealerTotal = getScore(dealerHand);

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
function displayResults(playerHand, dealerHand) {
  let result = getResults(playerHand, dealerHand);

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

// dealing cards
function dealCards(deck, hand) {
  hand.push(deck.shift());
}

// initial deal
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
  let ask = readline.question();
  return ask.toLowerCase()[0] === 'y';
}

// -------- main game loop ------------ //

while (true) {
  console.clear();
  prompt('Welcomei to Twenty-One!');

  deck = deckInit(rank, suit);
  shuffle(deck);
  let [playerHand, dealerHand] = firstDeal(deck);
  let playerScore = getScore(playerHand);
  let dealerScore = getScore(dealerHand);

  prompt(`Dealer has ${dealerHand[0]} and ?\n`);
  prompt(`You have: ${playerHand} and ${playerScore} points.`);

  while (true) {
    let answer;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      answer = readline.question().toLowerCase();
      if (['h', 's'].includes(answer)) break;
      prompt('Please enter "h" or "s"');
    }

    if (answer === 'h') {
      dealCards(deck, playerHand);
      prompt('You chose hit.');
      prompt(`Your cards: ${playerHand}.\nYour score: ${getScore(playerHand)}`)
    }
    if (answer === 's' || busted(playerHand)) break;
  }
  if (busted(playerHand)) {
    prompt(`You have: ${getScore(playerHand)} points.`)
    displayResults(playerHand, dealerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${getScore(playerHand)} points.`);
  }

  prompt('Dealer turn');
  while (getScore(dealerHand) < dealerLimit) {
    prompt('Dealer hits');
    dealCards(deck, dealerHand);
    prompt(`Dealer cards are: ${dealerHand}`);
  }

  if (busted(dealerHand)) {
    prompt(`Dealer has: ${getScore(dealerHand)} points.`);
    displayResults(playerHand, dealerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt('Dealer stays.');
  }
  console.log('======= Game Stats ========');
  prompt(`Player has:${playerHand}, and ${getScore(playerHand)} points.`);
  prompt(`Player has:${dealerHand}, and ${getScore(dealerHand)} points.`);

  displayResults(playerHand, dealerHand);
  if (!playAgain()) break;
}

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
function getScore(deck) {
  let sum = 0;
  deck.forEach(card => {
    let cardLen = card.length;
    if (card.includes('A')) {
      sum += 11;
    } else if (
      card.includes('J') || card.includes('Q') || card.includes('K')) {
      sum += 10;
    } else {
      sum += Number(card.slice(0, cardLen - 1));
    }
  });
  if (sum > 21) {
    sum -= 10;
  }
  return sum;
}

// dealing cards
function dealCards(deck) {
  return deck.shift();
}

let deck = deckInit(rank, suit);
shuffle(deck);

let player = [];
let dealer = [];
player.push(dealCards(deck));
dealer.push(dealCards(deck));
player.push(dealCards(deck));
dealer.push(dealCards(deck));

console.log(player);
console.log(dealer);

console.log(getScore(player));
console.log(getScore(dealer));

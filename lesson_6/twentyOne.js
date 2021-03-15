//let's create a deck of cards
function createDeckOfCards() {
  let two = 2; // first card in the deck
  let cards = {};
  [...Array(9).keys()].map(i => cards[i + two] = i + two);
  cards['Jack'] = 10;
  cards['Queen'] = 10;
  cards['King'] = 10;
  cards['Ace'] = 11;
  return cards;
}

//our deck of cards
const deckOfCards = createDeckOfCards();

//randomly select a property from an object
function drawCard(cards) {
  let keys = Object.keys(cards);
  let randomIdx = Math.floor(Math.random() * keys.length);
  let randomProp = keys[randomIdx];
  return randomProp;
}

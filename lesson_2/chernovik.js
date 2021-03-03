const readline = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors','spock','lizard'];

let yourIndex = readline.keyInSelect(VALID_CHOICES, 'Your choice?');
let yourChoice = VALID_CHOICES[yourIndex];



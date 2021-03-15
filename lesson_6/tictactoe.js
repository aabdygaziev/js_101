// step 1. display the board
const readline = require('readline-sync');
const initialMarker = ' ';
const humanMarker = 'X';
const computerMarker = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function displayBoard(board) {
  console.clear();

  console.log(`You are ${humanMarker}. Computer is ${computerMarker}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

// board set-up
function initBoard() {
  let board = {};
  for (let square = 1; square <= 9; square ++) {
    board[String(square)] = initialMarker;
  }
  return board;
}

//2. getting user input and computer input
function emptySpaces(board) {
  return Object.keys(board).filter(key => board[key] === initialMarker);
}

function findAtRiskSquare(line, board, marker) {
  let markerInLine = line.map(square => board[square]);

  if (markerInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === initialMarker);
    if (unusedSquare !== undefined) unusedSquare;
  }
  return null;
}

function computerChosesSpace(board) {
  let square;

  //defense
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, humanMarker);
    if (square) break;
  }
  //offense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, computerMarker);
      if (square) break;
    }
  }
  //random square
  if (!square) {
  let randomIndex = Math.floor(Math.random() * emptySpaces(board).length);
  square = emptySpaces(board)[randomIndex];
  }

  board[square] = computerMarker;
}

function playerChosesSpace(board) {
  let space;
  while (true) {
    console.log(`Choose an empty space (${joinOr(emptySpaces(board))}):`);
    space = readline.question().trim();
    if (emptySpaces(board).includes(space)) break;
    console.log('Sorry, that"s not valid choice');
    }
  board[space] = humanMarker;
}

function boardFull(board) {
  return emptySpaces(board).length === 0;
}

function chooseSquare(board, player) {
  if (player = 'Player') {
    return playerChosesSpace(board);
  } else {
    return computerChosesSpace(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Player'? 'Computer' : 'Player';
}

//joinOr
function joinOr(array, delimiter=',', connector = ' or ') {
  let len = array.length;
  if (len < 2) {
    return array.join();
  } else if (len > 2) {
    return array.slice(0,len - 1).join(delimiter) + connector + array.slice(-1);
  } else {
    return array.slice(0,1) + connector + array.slice(-1);
  }
}

function whoGoesFirstRandomizer() { // computer chooses randomly who goes first
  let random = Math.floor(Math.random() * 2);
  if (random === 1) {
    return humanMarker;
  } else {
    return computerMarker;
  }
}

//winner determination
function someOneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
        board[sq1] === humanMarker &&
        board[sq2] === humanMarker &&
        board[sq3] === humanMarker
    ) {
      return 'Player';
    } else if (
        board[sq1] === computerMarker &&
        board[sq2] === computerMarker &&
        board[sq3] === computerMarker
    ) {
      return 'Computer';
    }
  }
  return null;
}

// 3. main game loop
const totalRounds = 5;

while (true) {
  let playerPoints = 0, computerPoints = 0;
  for (let round = 0; round < totalRounds; round++) {
    let board = initBoard();
    while (true) {
      displayBoard(board);
      playerChosesSpace(board);
      if (detectWinner(board) === 'Player') {
        playerPoints++;
      }
      if (someOneWon(board) || boardFull(board)) break;

      computerChosesSpace(board);
      if (detectWinner(board) === 'Computer') {
        computerPoints++;
      }
      if (someOneWon(board) || boardFull(board)) break;
    }
    console.log(`Player points : ${playerPoints}`);
    console.log(`Computer points : ${computerPoints}`);
  }
  if (playerPoints > computerPoints) {
    console.log('Player wins');
  } else {
    console.log('Computer wins');
  }
  console.log('Hit y to play again. Hit any key to exit.')
  let answer = readline.question().toLowerCase();
  if (answer !== 'y') break;
}

console.log('Thank you for playing!')

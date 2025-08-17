import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { INITIAL_GAME_BOARD } from './constants.js';

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O'
    }

  return currentPlayer;
}

export function checkForWinner(gameBoard, playerNames) {
  
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      return playerNames[firstSquare];
    }
  }
  return null;
}

export function checkDraw(gameTurns, winner) {
  return gameTurns.length === 9 && !winner;
}

export function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  gameTurns.forEach(turn => {
      const { square, player } = turn;
      gameBoard[square.row][square.col] = player;
  });
  return gameBoard;
}

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";  
import Log from "./components/Log.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from "./components/GameOver.jsx";

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O'
    }

  return currentPlayer;
}

function checkForWinner(gameBoard) {
  
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      return firstSquare;
    }
  }
  return null;
}

function checkDraw(gameTurns, winner) {
  return gameTurns.length === 9 && !winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initGameBoard.map(row => [...row])];

  gameTurns.forEach(turn => {
      const { square, player } = turn;
      gameBoard[square.row][square.col] = player;
  });

  let winner = checkForWinner(gameBoard);

  function handleCellClick(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, 
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id ='players' className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        {(winner || checkDraw(gameTurns, winner)) && <GameOver winner={winner} />}
        <GameBoard onCellClick={handleCellClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
    );
}

export default App

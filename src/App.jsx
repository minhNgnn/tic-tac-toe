import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";  
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { useState } from "react";
import { PLAYERS } from './constants.js';
import { 
  deriveActivePlayer, 
  checkForWinner, 
  checkDraw, 
  deriveGameBoard 
} from './gameLogic.js';

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = checkForWinner(gameBoard, playerNames);

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

  function handleReset() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevNames) => ({
      ...prevNames,
      [symbol]: newName
    }));
  }

  return (
    <main>
      <div id='game-container'>
        <ol id ='players' className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={currentPlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={currentPlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || checkDraw(gameTurns, winner)) && <GameOver winner={winner} handleClick={handleReset} />}
        <GameBoard onCellClick={handleCellClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
    );
}

export default App

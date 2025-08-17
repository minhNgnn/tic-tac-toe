import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";  
import Log from "./components/Log.jsx";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleCellClick(rowIndex, colIndex) {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'

      if (prevTurns.length > 0 &&prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

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
        <GameBoard 
        onCellClick={handleCellClick} 
        turns={gameTurns}
        />
      </div>
      <Log />
    </main>
    );
}

export default App

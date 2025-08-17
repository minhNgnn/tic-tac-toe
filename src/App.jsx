import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";  
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleCellClick(rowIndex, colIndex) {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

  }

  return (
    <main>
      <div id='game-container'>
        <ol id ='players' className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <GameBoard onCellClick={handleCellClick} currentPlayerSymbol={currentPlayer} />
      </div>

    </main>
    );
}

export default App

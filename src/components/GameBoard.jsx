import React, { useState } from 'react';

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initGameBoard);

    function handleCellClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex][colIndex] = 'X'; // or 'O', depending on the current player
            return newGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleCellClick(rowIndex, colIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
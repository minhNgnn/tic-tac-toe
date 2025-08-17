
const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onCellClick, turns }) {
    // const [gameBoard, setGameBoard] = useState(initGameBoard);

    // function handleCellClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         newGameBoard[rowIndex][colIndex] = currentPlayerSymbol;
    //         return newGameBoard;
    //     });

    //     onCellClick()
    // }
    let gameBoard = initGameBoard;
    turns.forEach(turn => {
        const { square, player } = turn;
        gameBoard[square.row][square.col] = player;
    });

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onCellClick(rowIndex, colIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
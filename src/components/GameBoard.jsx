
const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onCellClick, turns }) {
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
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onCellClick(rowIndex, colIndex)} disabled={!!playerSymbol}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
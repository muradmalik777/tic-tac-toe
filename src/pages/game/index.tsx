import React, { useEffect, useState } from "react";
import {
    DEFAULT_GRID,
    GAME_MARK_TO_PLAYER,
    GAME_PLAYER_TO_MARK,
    GAME_NAME,
    PLAYER1,
    PLAYER1_MARK,
    PLAYER2,
    PLAYER2_MARK,
    RESTART,
    GAME_DRAW,
} from "../../helpers/constants";
import styles from "./game.module.css";
import GridSizeSelect from "../../components/GridSizeSelect";
import Players from "../../components/Players";
import { GameService } from "../../services/game";
import GameGrid from "../../components/GameGrid";

const TicTacToe: React.FC = () => {
    const [gridSize, setGridSize] = useState(DEFAULT_GRID);
    const [grid, setGrid] = useState<string[][]>();
    const [currentTurn, setCurrentTurn] = useState(PLAYER1);
    const [gameDraw, setDraw] = useState(false);
    const [ended, setEnded] = useState(false);
    const [winner, setWinner] = useState("");
    const [scores, setScores] = useState<{ [key: string]: number }>({});

    const initGame = () => {
        setGrid(GameService.createGrid(gridSize));
        setCurrentTurn(PLAYER1);
        setEnded(false);
        setDraw(false);
        setWinner("");
    };

    useEffect(initGame, [gridSize]);

    const checkGameStatus = () => {
        if (grid) {
            const { isdraw, winnerMark } = GameService.gameStatus(grid, PLAYER1_MARK, PLAYER2_MARK);
            setDraw(isdraw);
            setWinner(winnerMark);
            if (isdraw || winnerMark) {
                setEnded(true);
                setCurrentTurn(0);
            }
        }
    };

    useEffect(checkGameStatus, [currentTurn, grid]);

    const calculateScore = () => {
        const newScores = { ...scores };
        newScores[winner] = (newScores[winner] || 0) + 1;
        setScores(newScores);
    };

    useEffect(calculateScore, [ended, winner]);

    const changeTurn = () => {
        let nextTurn = currentTurn === PLAYER1 ? PLAYER2 : PLAYER1;
        setCurrentTurn(nextTurn);
    };

    const mark = (rowIndex: number, boxIndex: number) => {
        if (grid && !ended) {
            if (grid[rowIndex][boxIndex]) return;
            const newGrid = [...grid];
            newGrid[rowIndex][boxIndex] = GAME_PLAYER_TO_MARK[currentTurn];
            setGrid(newGrid);
            changeTurn();
        }
    };

    return (
        <div className={styles.game}>
            <div className={styles.gameHeader}>
                <h1 className={styles.gameTitle}>{GAME_NAME}</h1>
                <GridSizeSelect size={gridSize} onChange={setGridSize} />
            </div>
            <Players turn={currentTurn} />
            <GameGrid grid={grid} mark={mark} />
            <div className={styles.scores}>
                <p className={styles.scoreTitle}>Game score:</p>
                <div className={styles.playerScores}>
                    <p className={styles.player1}>Player1: {scores[PLAYER1_MARK] || 0}</p>
                    <p className={styles.player2}>Player2: {scores[PLAYER2_MARK] || 0}</p>
                </div>
            </div>
            {(gameDraw || ended) && (
                <>
                    {winner && (
                        <p className={`${styles.winner} ${winner === PLAYER1_MARK ? styles.player1 : styles.player2}`}>
                            Player {GAME_MARK_TO_PLAYER[winner]} has won!
                        </p>
                    )}
                    {gameDraw && <p className={styles.winner}>{GAME_DRAW}</p>}
                    <button className={styles.restartButton} type="button" onClick={initGame}>
                        {RESTART}
                    </button>
                </>
            )}
        </div>
    );
};

export default TicTacToe;

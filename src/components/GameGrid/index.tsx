import React from "react";
import { PLAYER1_MARK } from "../../helpers/constants";
import styles from "./gameGrid.module.css";

interface Props {
    grid: string[][] | undefined;
    mark: (rowIndex: number, boxIndex: number) => void;
}

const GameGrid: React.FC<Props> = ({ grid, mark }) => {
    return (
        <div className={styles.gameGrid}>
            {grid &&
                grid.map((row, rowIndex) => (
                    <div key={`${rowIndex}`} className={styles.gameGridRow}>
                        {row.map((value, boxIndex) => (
                            <div
                                key={`${boxIndex}`}
                                className={`${styles.gridItem} ${
                                    value === PLAYER1_MARK ? styles.gridItem1 : styles.gridItem2
                                }`}
                                onClick={() => mark(rowIndex, boxIndex)}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default GameGrid;

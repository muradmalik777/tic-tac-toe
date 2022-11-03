import React from "react";
import { PLAYER1_LABEL, PLAYER1_MARK, PLAYER2_LABEL, PLAYER2_MARK, PLAYER2, PLAYER1 } from "../../helpers/constants";
import styles from "./players.module.css";

const Players: React.FC<{ turn: number }> = ({ turn }) => {
    return (
        <div className={styles.playersBox}>
            <p className={`${styles.player} ${turn === PLAYER1 ? styles.active1 : ""}`}>
                {PLAYER1_LABEL} - ({PLAYER1_MARK})
            </p>
            <p className={`${styles.player} ${turn === PLAYER2 ? styles.active2 : ""}`}>
                {PLAYER2_LABEL} ({PLAYER2_MARK})
            </p>
        </div>
    );
};

export default Players;

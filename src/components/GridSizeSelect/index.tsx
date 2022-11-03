import React from "react";
import { GRID_SIZE_SELECT_LABEL, GRID_SIZE_SELECT_OPTIONS } from "../../helpers/constants";
import styles from "./select.module.css";

interface Props {
    size: number;
    onChange: (val: number) => void;
}

const GridSizeSelect: React.FC<Props> = ({ size, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(Number(e.target.value));
    };

    return (
        <div className={styles.selectBox}>
            <label className={styles.selectLabel}>{GRID_SIZE_SELECT_LABEL}</label>
            <select value={size} onChange={handleChange} name="gridSizeSelect" className={styles.selectInput}>
                {GRID_SIZE_SELECT_OPTIONS.map((item) => (
                    <option key={item.label} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GridSizeSelect;

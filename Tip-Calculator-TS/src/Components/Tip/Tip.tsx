import React from "react";
import styles from "./Tip.module.css";

// Define the props for Speed
interface TipProps{
    tip: string;
    handleTipChange: (newTip: string) => void;
}

const Tip: React.FC<TipProps> = ({ tip: tip, handleTipChange: handleTipChange}) => {
    return (
        <main className={styles.container}>
            <label htmlFor="tip-input">Enter Your Tip Percentage (e.g. "15"):</label>
            <input 
            type="number"
            id="tip-input"
            placeholder="15"
            value={tip}
            className={styles.input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleTipChange(event.target.value)} />
        </main>
    );
}

export default Tip;
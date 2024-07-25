import React from "react";
import styles from "./Bill.module.css";

// Define the props for Bill
interface BillProps{
    bill: string;
    handleBillChange: (newBill: string) => void;
}
const Bill: React.FC<BillProps> = ({ bill: bill, handleBillChange: handleBillChange }) => {

    return (
        <main className={styles.container}>
            <label htmlFor="destination-input">Enter Your Bill Amount (e.g. 78.47):</label>
            <input 
                type="number"
                id="bill-input"
                placeholder="78.78"
                value={bill}
                className={styles.input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleBillChange(event.target.value)}/>
        </main>
    );
};

export default Bill;
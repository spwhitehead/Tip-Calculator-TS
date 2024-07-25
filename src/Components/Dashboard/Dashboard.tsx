import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Bill from "../Bill/Bill"
import Tip from "../Tip/Tip"

const Dashboard: React.FC = () => {
    const [state, setState] = useState({ bill: "", tip: "" });
    const [totalBill, setEta] = useState<number | null>(null);

    const handleChange = (property: "bill" | "tip", value: string | null): void => {
        setState(prevState => ({ ...prevState, [property]: value }));
    } 

    const handleSubmit = (): void => {
        const { bill: bill, tip: tip } = state;
        
        // Make sure the fields are not empty
        if (bill === "" || tip === "") {
            alert("Please enter a value for both Bill and Tip amounts.");
            return;
        }

        // Math for ETA here
        const billValue: number = parseFloat(bill);
        const tipValue: number = parseFloat(tip);
        const total: number = Math.abs((billValue * ((tipValue/100) + 1)));

        // Set the ETA (result)
        console.log(`Total Bill: $${total.toFixed(2)}.`); // Log Total bill
        setEta(total); // Update Total state
    }

    return (
        <main className={styles.container}>
            <div className={styles.layout}>
                <h1 className={styles.heading}>Tip Calculator</h1>
                    <form className={styles.formFields}>
                        <Bill 
                            bill={state.bill}
                            handleBillChange={(newBill) => handleChange("bill", newBill)}
                        />
                        <Tip 
                            tip={state.tip}
                            handleTipChange={(newTip) => handleChange("tip", newTip)}
                        />
                    </form>
                <button 
                    onClick={handleSubmit}
                    type="button"
                    className={styles.submitBtn}
                    >Calculate Total Bill
                </button>
                {/* Display ETA here */}
                {totalBill !== null && (
                    <div className={styles.result}>
                        <h2>Total Bill</h2>
                        <h3>${totalBill.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                    </div>
                )}
            </div>
        </main>
    );
}
export default Dashboard
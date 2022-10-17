import React from "react";
import "./TransactionList.css";

function TransactionList(props) {
    return (
        <div className="transaction-list">
            {props.transactions.map(t =>
                <div className="transaction">
                    {t.type = "DEPOSIT" ? "Depósito" : "Extracción"} de ${t.sum}
                </div>
            )}
        </div>
    )
}
export default TransactionList

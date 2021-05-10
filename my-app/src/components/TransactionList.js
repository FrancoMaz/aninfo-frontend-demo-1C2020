import React from "react";
import "./TransactionList.css";

export default class TransactionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordingMap: {
                "DEPOSIT": "Depósito",
                "WITHDRAWAL": "Extracción"
            }
        }

    }

    render() {

        let transactions = this.props.transactions.map(t =>
            <div className="transaction">
                {this.state.wordingMap[t.type]} de ${t.sum}
            </div>);

        return (
            <div className="transaction-list">
                {transactions}
            </div>
        )
    }
}

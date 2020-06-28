import React from "react";
import "./TransactionList.css";

export default class TransactionList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let transactions = this.props.transactions.map(t => <div className="transaction">{t}</div>);

        return (
            <div className="transaction-list">
                {transactions}
            </div>
        )
    }
}
